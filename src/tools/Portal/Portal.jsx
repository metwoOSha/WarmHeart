import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root");

export function Portal({ children, onClose }) {
    return createPortal(
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>,
        modalRoot
    );
}
