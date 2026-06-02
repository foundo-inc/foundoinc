import { createStore, get, set, del, UseStore } from "idb-keyval";

/** Custom IndexedDB store for redux-persist (replaces localStorage). */
const persistStore: UseStore = createStore("foundo-checkout", "persist");

export const idbReduxStorage = {
  getItem: (key: string): Promise<string | null> =>
    get<string>(key, persistStore).then((v) => v ?? null),
  setItem: (key: string, value: string): Promise<void> =>
    set(key, value, persistStore),
  removeItem: (key: string): Promise<void> => del(key, persistStore),
};

/** Separate store for uploaded files (KYC IDs, etc.). Stores Blob/File. */
const fileStore: UseStore = createStore("foundo-files", "files");

export interface StoredFileMeta {
  key: string;
  name: string;
  size: number;
  type: string;
  /** Blob URL valid for the current browser session only. */
  url: string;
}

/** Save a File to IndexedDB and return metadata + a blob URL. */
export const saveFileToIDB = async (file: File): Promise<StoredFileMeta> => {
  const key = (crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`);
  await set(key, file, fileStore);
  return {
    key,
    name: file.name,
    size: file.size,
    type: file.type,
    url: URL.createObjectURL(file),
  };
};

/** Retrieve a File from IndexedDB by key. */
export const getFileFromIDB = async (key: string): Promise<File | Blob | undefined> =>
  get<File | Blob>(key, fileStore);

/** Rebuild a blob URL for a stored file (after rehydration from persist). */
export const rebuildFileUrl = async (key: string): Promise<string | null> => {
  const blob = await getFileFromIDB(key);
  return blob ? URL.createObjectURL(blob) : null;
};

/** Delete a stored file. */
export const deleteFileFromIDB = (key: string): Promise<void> => del(key, fileStore);
