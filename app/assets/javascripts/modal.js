 $(document).ready(function () {
    $('.modal').find('.js-btn').on('click', function() {
      $(document.body).addClass('modal-open');
    });

    $('.modal-close').on('click', function() {
      $(document.body).removeClass('modal-open');
    })

    $('.modal-bg').on('click', function() {
      $(document.body).removeClass('modal-open');
    })
  })
