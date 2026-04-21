export class Rect {
    constructor(x, y, w, h, color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
    }

    draw(ctx, fill = true) {
        ctx.fillStyle = this.color.style;
        if (fill) {
            ctx.fillRect(this.x, this.y, this.w, this.h);
        } else {
            ctx.strokeRect(this.x, this.y, this.w, this.h);
        }
    }
}