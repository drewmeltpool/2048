import fs from 'fs';

export class IOProvider {
  private _error: unknown;
  private _file = '';

  constructor(private readonly _fileName: string) {}

  readFileSync<T = unknown>(cb?: (_file: string) => T) {
    let data;
    try {
      this._file = fs.readFileSync(this._fileName, 'utf-8');
      data = cb ? cb(this._file) : this._file;
    } catch (e) {
      this._error = e;
    }

    return [data, this._error];
  }

  writeFileSync<T = unknown>(data: T): [string, unknown] {
    let newFile = '';
    this._error = null;
    try {
      newFile = String(JSON.stringify(data));
      fs.writeFileSync(this._fileName, newFile);
    } catch (error) {
      this._error = error;
    }

    return [newFile, this._error];
  }
}
