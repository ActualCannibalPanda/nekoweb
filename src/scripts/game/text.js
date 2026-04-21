export class Text {
    constructor(text, x, y, color, maxWidth = undefined, align = "center", font = "10px serif") {
        this.text = text;
        this.x = x;
        this.y = y;
        this.color = color;
        this.maxWidth = maxWidth;
        this.align = align;
        this.font = font;
    }

    draw(ctx, fill = true) {
        ctx.fillStyle = this.color.style;
        ctx.textAlign = this.align;
        ctx.font = this.font;
        if (fill) {
            if (this.maxWidth !== undefined) {
                ctx.fillText(this.text, this.x, this.y, this.maxWidth);
            } else {
                ctx.fillText(this.text, this.x, this.y, this.maxWidth);
            }
        }
        else {
            ctx.strokeText(this.text, this.x, this.y, this.maxWidth);
        }
    }
}