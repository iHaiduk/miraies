/**
 * Created by igor on 06.11.16.
 */

class Events {

    constructor(ty) {
        // this.didMount = this.didMount.bind(this);
        // this.onResize = this.onResize.bind(this);
        // this.update = this.update.bind(this);
    }

    didMount() {

        console.log(333, this.component)

        //
        // const canvas = document.createElement('canvas');
        // const docFragment = document.createDocumentFragment();
        // const style = window.getComputedStyle(this.refs.scope);
        // const font = [
        //     style['font-weight'],
        //     style['font-style'],
        //     style['font-size'],
        //     style['font-family']
        // ].join(' ');
        //
        // docFragment.appendChild(canvas);
        // this.canvas = canvas.getContext('2d');
        // this.canvas.font = font;
        // this.forceUpdate();
        // window.addEventListener('resize', this.onResize);

    }

    onResize() {
        window.requestAnimationFrame(this.update.bind(this))
    }

    update() {
        this.forceUpdate();
    }

    measureWidth(text) {
        return this.canvas.measureText(text).width;
    }

    getRenderText() {
        console.log(this.store);

        return "Rolo";

        // const scopeWidth = this.refs.scope.getBoundingClientRect().width;
        //
        // // return if display:none
        // if (scopeWidth === 0) {
        //     return null;
        // }
        //
        // // return if all of text can be displayed
        // if (scopeWidth >= this.measureWidth(text)) {
        //     return (
        //         <span {...props}>{text}</span>
        //     );
        // }
        //
        // let childText = '';
        // let currentPos = 1;
        // let maxTextLength = text.length;
        // let truncatedText = '';
        // let splitPos = 0;
        // let startPos = 0;
        // let displayLine = line;
        // let width = 0;
        // let lastIsEng = false;
        // let lastSpaceIndex = -1;
        //
        // while (displayLine--) {
        //     let ext = displayLine ? '' : truncateText + ' ' + childText;
        //     while (currentPos <= maxTextLength) {
        //         truncatedText = text.substr(startPos, currentPos);
        //         width = this.measureWidth(truncatedText + ext);
        //         if (width < scopeWidth) {
        //             splitPos = text.indexOf(' ', currentPos + 1);
        //             if (splitPos === -1) {
        //                 currentPos += 1;
        //                 lastIsEng = false;
        //             } else {
        //                 lastIsEng = true;
        //                 currentPos = splitPos;
        //             }
        //         } else {
        //             do {
        //                 currentPos--;
        //                 truncatedText = text.substr(startPos, currentPos);
        //                 if (truncatedText[truncatedText.length - 1] === ' ') {
        //                     truncatedText = text.substr(startPos, currentPos - 1);
        //                 }
        //                 if (lastIsEng) {
        //                     lastSpaceIndex = truncatedText.lastIndexOf(' ');
        //                     if (lastSpaceIndex > -1) {
        //                         currentPos = lastSpaceIndex;
        //                         truncatedText = text.substr(startPos, currentPos);
        //                     }
        //                 }
        //                 width = this.measureWidth(truncatedText + ext);
        //             } while (width >= scopeWidth);
        //             startPos += currentPos;
        //             break;
        //         }
        //     }
        //
        //     if (currentPos >= maxTextLength) {
        //         startPos = maxTextLength;
        //         break;
        //     }
        // }
        //
        // return startPos !== maxTextLength && cutText ? text.substr(0, startPos) + truncateText + ' ' : text;

    }

}

export default Events;