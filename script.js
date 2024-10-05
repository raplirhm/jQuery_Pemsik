$('#btn-tambah').click(function(){
    $('#modal-tambah').removeClass('hidden')
  });

 function openEdit() {
  document.getElementById("modal-edit").classList.remove("hidden");
 }

  function openForm() {
    document.getElementById("modal-edit").style.display = "block";
  }

  function openBahaya() {
    Swal.fire({
        title: 'Yakin Nih?',
        text: 'Tidak Dapat Dikembailkan',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#30565dc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oke Hapus'
      }).then((result) => {
        if(result.isConfirmed){
          Swal.fire(
            'Terhapus',
            'Sudah Terhapus',
            'Sukses'
          );
        }
      });
  }

  