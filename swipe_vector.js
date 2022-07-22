/**
     * Vector Library
     **/
    class Vector {
      constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
      }

      add(v) {
        this.x += v.x;
        this.y += v.y;
      }

      sub(v) {
        this.x -= v.x;
        this.y -= v.y;
      }

      mult(n) {
        this.x *= n;
        this.y *= n;
      }

      mag() {
        return Math.sqrt(this.x * this.x + this.y + this.y);
      }

      get() {
        return new Vector(this.x, this.y);
      }

      normalize() {
        this.x = normalize(this.x);
        this.y = normalize(this.y);
      }

      copy() {
        return new Vector(this.x, this.y);
      }
    }

    Vector.mult = (v, n) => new Vector(v.x * n, v.y * n);

    Vector.div = (v, n) => new Vector(v.x / n, v.y / n);