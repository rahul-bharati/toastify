class Toast {
    callback;

    registerCallback(cb) {
        this.callback = cb;
    }

    // type: success, info, warning
    showToast(type, message) {
        if(this.callback) {
            this.callback({type, message})
        }
    }

    error(message) {
        this.showToast("error", message)
    }

    info(message) {
        this.showToast("info", message)
    }

    // other methods success, warning
}

export const toast = new Toast();