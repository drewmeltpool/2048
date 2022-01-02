class Game {
  map: number[][];

  constructor(
    private readonly _width: number,
    private readonly _height: number
  ) {
    this.map = this._init();
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
    this.map[x][y] = value;
  }

  public getCell(x: number, y: number) {
    return this.map[x][y];
  }

  public toString() {
    return this.map.map((row) => row.join(' ')).join('\n');
  }

  public up() {
    for (let i = 0; i < this._width; i++) {
      const tmp = [];
      for (let j = 0; j < this._height; j++) {
        if (this.map[j][i]) tmp.push(this.map[j][i]);
      }

      const column = [];
      for (let j = 0; j < tmp.length; j++) {
        tmp[j] === tmp[j + 1] ? column.push(2 * tmp[j++]) : column.push(tmp[j]);
      }

      for (let j = 0; j < this._height; j++) {
        this.map[j][i] = column[j] || 0;
      }
    }

    return this.map;
  }

  public left() {
    for (let i = 0; i < this.map.length; i++) {
      const tmp = this._removeZero(this.map[i]);
      const row = [];
      for (let j = 0; j < tmp.length; j++) {
        tmp[j] === tmp[j + 1] ? row.push(2 * tmp[j++]) : row.push(tmp[j]);
      }

      this.map[i] = [...row, ...Array(this.map[i].length - row.length).fill(0)];
    }

    return this.map;
  }

  public right() {
    for (let i = 0; i < this.map.length; i++) {
      const tmp = this._removeZero(this.map[i]);
      const row = [];
      for (let j = tmp.length - 1; j >= 0; j--) {
        tmp[j] === tmp[j - 1] ? row.push(2 * tmp[j--]) : row.push(tmp[j]);
      }

      this.map[i] = [
        ...Array(this.map[i].length - row.length).fill(0),
        ...row.reverse(),
      ];
    }

    return this.map;
  }
  public down() {
    for (let i = 0; i < this._width; i++) {
      const tmp = [];
      for (let j = 0; j < this._height; j++) {
        if (this.map[j][i]) tmp.push(this.map[j][i]);
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
        this.map[j][i] = last[j] || 0;
      }
    }

    return this.map;
  }
}

export default Game;
