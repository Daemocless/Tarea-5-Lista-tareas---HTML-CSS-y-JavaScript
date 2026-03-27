listaTareas = [];
function AddTareas() {
  const text = document.getElementById("tarea");
  const lista = document.getElementById("listaTareas");
  lista.innerHTML +=
    "<div class=tareaBonita>" + text.value + " -<button>X</button></div> ";
  console.log(lista);
}
