// JavaScript Document
jQuery(document).ready(function() {

  jQuery('.barrio-modal').each(function () {
    var title = jQuery(this).children('h2').text();
    jQuery(this).after('<section id="btn-' + jQuery(this).attr('id') + '" class="sideral-corner after"><a href="#' + jQuery(this).attr('id') + '" role="button" class="btn" data-toggle="modal">' + title + '</a></section>');
  });    
    jQuery('.barrio-modal .block-content').addClass('modal-body');
    jQuery('.barrio-modal h2').wrap('<div class="modal-header" />');
    jQuery('.barrio-modal .modal-header').prepend('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>');
    jQuery('.barrio-modal').append('<div class="modal-footer"><button class="btn" data-dismiss="modal" aria-hidden="true">' + Drupal.t('Close') + '</button></div>');

});