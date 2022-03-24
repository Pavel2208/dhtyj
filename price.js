$(function() {
    country = $.url(location.href).param('country');

    if (country == 'SI') {
        sl_selected = 'selected="selected"';
    } else {
        sl_selected = '';
    }
   

    selects = $("select[name='country']");
    selects.append('<option value="SI" ' + sl_selected + '>Slovenija</option>');

    var change = 0,
        updatePrices = function(item) {

            change = 1;

            $(item.children).each(function() {
                if (this.selected) sel = $(this).val();
            });

            if (typeof sel === 'undefined') {
                sel = 'SI';
            }

            if (sel == 'SI') {
                $('.old_price_val').html('78');
                $('.old_price_cur').html('EUR');
                $('.new_price_val').html('39');
                $('.new_price_cur').html('EUR');
                $('select[name=country]').val('SI').trigger('change');
                initializeMask({ mask: "+386(@9{7})|(89{4,7})|(&09{4,6})", removeMaskOnSubmit: false, definitions: { 
					'@':
					{ validator:"[1-7]", casing:"lower" }
					,
					'&':  { validator:"9", casing:"lower" },
					} 
					})
            }

       

            change = 0;
        };
    $("select").change(function() {
        if (change == 0) updatePrices(this);
    }).change();

    function initializeMask(mask) {
        $('[name=phone]').inputmask(mask);
    }
  
});