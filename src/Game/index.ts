class Game {
  _map: number[][];

  constructor(
    private readonly _width: number,
    private readonly _height: number
  ) {
    this._map = this._init();
  }

  private _init() {
    return Array(this._height)
      .fill(0)
      .map(() => Array(this._width).fill(0));
  }

  private _removeZero(arr: number[]) {
    return arr.filter((i) => i !== 0);
  }

  public updateCell(x: number, y: number, value: number) {
    this._map[x][y] = value;
  }

  public getCell(x: number, y: number) {
    return this._map[x][y];
  }

  public toString() {
    return this._map.map((row) => row.join(' ')).join('\n');
  }

  public up() {
    for (let i = 0; i < this._width; i++) {
      const tmp = [];
      for (let j = 0; j < this._height; j++) {
        if (this._map[j][i]) tmp.push(this._map[j][i]);
      }

      const column = [];
      for (let j = 0; j < tmp.length; j++)
        tmp[j] === tmp[j + 1] ? column.push(2 * tmp[j++]) : column.push(tmp[j]);

      for (let j = 0; j < this._height; j++) this._map[j][i] = column[j] || 0;
    }

    return this._map;
  }

  public left() {
    for (let i = 0; i < this._map.length; i++) {
      const tmp = this._removeZero(this._map[i]);
      const row = [];
      for (let j = 0; j < tmp.length; j++) {
        tmp[j] === tmp[j + 1] ? row.push(2 * tmp[j++]) : row.push(tmp[j]);
      }

      this._map[i] = [
        ...row,
        ...Array(this._map[i].length - row.length).fill(0),
      ];
    }

    return this._map;
  }

  public right() {
    for (let i = 0; i < this._map.length; i++) {
      const tmp = this._removeZero(this._map[i]);
      const row = [];
      for (let j = tmp.length - 1; j >= 0; j--) {
        tmp[j] === tmp[j - 1] ? row.push(2 * tmp[j--]) : row.push(tmp[j]);
      }

      this._map[i] = [
        ...Array(this._map[i].length - row.length).fill(0),
        ...row.reverse(),
      ];
    }

    return this._map;
  }
  public down() {
    for (let i = 0; i < this._width; i++) {
      const tmp = [];
      for (let j = 0; j < this._height; j++) {
        if (this._map[j][i]) tmp.push(this._map[j][i]);
      }

      const column = [];
      for (let j = tmp.length - 1; j >= 0; j--) {
        tmp[j] === tmp[j - 1] ? column.push(2 * tmp[j--]) : column.push(tmp[j]);
      }

      const last = [
        ...Array(this._height - column.length).fill(0),
        ...column.reverse(),
      ];

      for (let j = 0; j < this._height; j++) {
        this._map[j][i] = last[j] || 0;
      }
    }

    return this._map;
  }
}

export default Game;
