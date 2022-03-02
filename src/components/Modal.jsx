import React from "react";

import "../assets/css/modal.css";

function Modal() {
  
    
    

    
    // When the user clicks the button, open the modal
     function btnon() {
    // Get the modal
      var modal = document.querySelector(".myModal");
      modal.classList.add("show")
    };

    // When the user clicks on <span> (x), close the modal
   /* span.onclick = */function spanon() {
    var modal = document.querySelector(".myModal");
    modal.classList.remove("show")
    };
    
  

  return (
    <div className="modalContainer" >
      <i className="bx bxs-help-circle myBtn "  tabindex="3" onClick={btnon} ></i>

      {/*<!-- The Modal -->*/}
      <div myModal className="modal myModal">
        {/*<!-- Modal content -->*/}
        <div className="modal-content">
          <span className="close" onClick={spanon}>&times;</span>
          <ul>
              <li> <i class="bx bxs-group"></i> = Seguidores </li>
              <li> <i class="bx bx bxs-heart"></i> = Seguindo </li>
              <li> <i class="bx bxs-folder"></i> = Repositorio Públicos</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Modal;
