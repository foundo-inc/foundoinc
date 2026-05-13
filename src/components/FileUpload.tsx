import { useRef, useState, useCallback } from "react";
import { Upload, FileCheck2, X, FileImage, FileText, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FileMeta {
  key: string;
  name: string;
  size: number;
  type: string;
  url: string;
}

interface FileUploadProps {
  value: FileMeta | null;
  onChange: (meta: FileMeta | null) => void;
  onFileSelect: (file: File) => Promise<FileMeta>;
  onRemove?: () => void;
  onUploadingChange?: (uploading: boolean) => void;
  error?: string;
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
}

export function FileUpload({ value, onChange, onFileSelect, onRemove, onUploadingChange, error }: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const isImage = value?.type.startsWith("image/");
  const isPdf = value?.type === "application/pdf";

  const handleFiles = useCallback(
    async (file: File) => {
      if (file.size > 10 * 1024 * 1024) {
        return { error: "File too large. Max 10MB." };
      }
      const allowed = ["image/jpeg", "image/png", "image/webp", "application/pdf"];
      if (!allowed.includes(file.type)) {
        return { error: "Invalid file type. Use JPG, PNG, WEBP or PDF." };
      }
      setIsUploading(true);
      onUploadingChange?.(true);
      try {
        const meta = await onFileSelect(file);
        onChange(meta);
      } catch {
        return { error: "Upload failed. Please try again." };
      } finally {
        setIsUploading(false);
        onUploadingChange?.(false);
      }
      return { error: null };
    },
    [onChange, onFileSelect, onUploadingChange]
  );

  const onDrop = useCallback(
    async (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      const file = e.dataTransfer.files?.[0];
      if (file) await handleFiles(file);
    },
    [handleFiles]
  );

  const onInputChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) await handleFiles(file);
      e.target.value = "";
    },
    [handleFiles]
  );

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleRemove = useCallback(() => {
    onChange(null);
    onRemove?.();
  }, [onChange, onRemove]);

  // Uploaded state
  if (value) {
    return (
      <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
        <div className="flex items-start gap-4">
          {/* Preview / Icon */}
          <div className="shrink-0">
            {isImage ? (
              <a
                href={value.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-20 h-20 rounded-lg overflow-hidden border border-border bg-secondary"
              >
                <img
                  src={value.url}
                  alt={value.name}
                  className="w-full h-full object-cover"
                />
              </a>
            ) : (
              <div className="w-20 h-20 rounded-lg bg-primary/10 flex items-center justify-center">
                {isPdf ? (
                  <FileText className="w-8 h-8 text-primary" />
                ) : (
                  <FileImage className="w-8 h-8 text-primary" />
                )}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-1">
              <a
                href={value.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold truncate hover:underline text-foreground"
                title={value.name}
              >
                {value.name}
              </a>
              <button
                type="button"
                onClick={handleRemove}
                className="shrink-0 text-muted-foreground hover:text-destructive transition-colors p-1 rounded-md hover:bg-destructive/10"
                aria-label="Remove file"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
              <span>{formatBytes(value.size)}</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
              <span className="uppercase">{value.type.split("/")[1]}</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-success">
              <FileCheck2 className="h-3.5 w-3.5" />
              <span>Uploaded & encrypted</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Empty upload state
  return (
    <div
      className={cn(
        "relative rounded-xl border-2 border-dashed bg-card transition-all duration-200 overflow-hidden",
        isDragging
          ? "border-primary bg-primary/5 scale-[1.01]"
          : "border-border hover:border-primary/40 hover:bg-primary/[0.02]",
        error && "border-destructive/60 bg-destructive/[0.03]",
        isUploading && "opacity-70 pointer-events-none"
      )}
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
    >
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="w-full p-6 flex flex-col items-center justify-center gap-3 text-center cursor-pointer"
      >
        {/* Icon circle */}
        <div
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center transition-colors",
            isDragging ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
          )}
        >
          {isUploading ? (
            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
          ) : (
            <Upload className="w-5 h-5" />
          )}
        </div>

        {/* Text */}
        <div>
          <p className="text-sm font-semibold text-foreground">
            {isUploading ? "Uploading…" : isDragging ? "Drop file here" : "Click or drag file here"}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            JPG, PNG, WEBP or PDF · max 10MB
          </p>
        </div>

        {error && (
          <p className="text-xs text-destructive mt-1">{error}</p>
        )}
      </button>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,application/pdf"
        className="hidden"
        onChange={onInputChange}
      />
    </div>
  );
}
