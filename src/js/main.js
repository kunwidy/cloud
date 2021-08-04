//main.js file

//Unlock alert
function sweetUnlock (){
    swal({
      title: "Unlock Domain?",
      text: "Domain ini akan di unlock, Apakah Anda yakin?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Selamat! domain berhasil diunlock!", {
          icon: "success",
        });
      } else {
        swal("Cancle", "Domain batal diunlock!");
      }
    });
  }

//Unlock alert
function sweetLocked (){
  swal({
    title: "Lock Domain?",
    text: "Domain ini akan di lock, Apakah Anda yakin?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Selamat! domain berhasil dilock!", {
        icon: "success",
      });
    } else {
      swal("Cancle", "Domain batal dilock!");
    }
  });
}