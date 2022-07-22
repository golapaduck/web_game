 /**
     *   Canvas Library
     **/
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const width = 710;
    const height = 880;
    const uiOffsetY = 80;

    canvas.width = width;
    canvas.height = height;

    function line(x1, y1, x2, y2, color = "#000") {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }

    function dashLine(x1, y1, x2, y2) {
      ctx.beginPath();
      ctx.setLineDash([5, 15]);
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    function rect(x, y, w, h) {
      ctx.beginPath();
      ctx.rect(x, y, w, h);
      ctx.strokeStyle = "#000";
      ctx.stroke();
      ctx.closePath();
    }

    function fillRect(x, y, w, h, color = "#171717") {
      ctx.save();
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.fillRect(x, y, w, h);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    }

    function circle(x, y, r, color = "#000") {
      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.lineWidth = 3;
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    }

    function clear() {
      ctx.clearRect(0, 0, width, height);
    }

    function shuffle(arr) {
      return arr.sort(() => Math.random() - 0.5);
    }