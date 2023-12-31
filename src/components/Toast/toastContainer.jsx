import { useEffect, useState } from 'react';
import { toast } from './toast';
import './toast.css'

const ToastContainer = () => {
    const [toastOptions, setToastOptions] = useState(null);

    useEffect(() => {
        const show = (options) => setToastOptions(options);
        toast.registerCallback(show)

        return () => toast.registerCallback(null);
    }, [])

    const handleClose = () => setToastOptions(null);

    const classes = getStyleClass(toastOptions.type)

    if(!toastOptions) return null;

    return <div className={`alert customToast ${classes}`} role="alert">
        {toastOptions.message}
        <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
    </div>
}

const getStyleClass = (type) => {
    switch(type) {
        case "info": return "alert-primary";
        case "error": return "alert-danger";
        // more cases
        default: return ""
    }
}

export default ToastContainer;