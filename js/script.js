$(document).ready(function () {
    // -----------------------------------------------------------------------------------------
    // Get JSON dari server
    // atur lokasi server
    const serverLoc = 'http://localhost/kamusobat-webadmin/json/';
    // ---------------------------------------------------------------------------------------------

    // splash screen
    $('.splash-screen').delay(4000).fadeIn(1000, function () {
        $('.splash-screen').fadeOut(1000, function () {
            $('.logo').show();
            $('.menu').show();
        });
    });
    // end splash screen

    // action tombol generik
    $('.menu-tombol-generik').click(function () {
        $('.logo').hide();
        $('.menu').hide();
        $('.daftar').show();

        $('.list-obat').append('<li class="list-group-item list-group-item-info font-weight-bold">Daftar Obat Generik</li>');

        // parsing data obat generik
        $.ajax({
            url: serverLoc + 'jsonKamus/1',
            type: 'get',
            dataType: 'JSON',
            success: function (response) {
                console.log(response);
                let len = response.length;
                for (let i = 0; i < len; i++) {
                    let kdkamus = response[i].kdkamus;
                    let nama = response[i].nama;
                    // let kandungan = response[i].kandungan;
                    // let merk = response[i].merk;
                    // let golongan = response[i].golongan;
                    // let dosis = response[i].dosis;
                    // let efek = response[i].efek;
                    // let peringatan = response[i].peringatan;
                    // let interaksi = response[i].interaksi;

                    $('.list-obat').append('<a href="#" class="list-group-item list-group-item-action">' + nama + '</a>');
                }
            }
        });
        // end parsing data obat generik
    });
    // end action tombol generik

    // action tombol bermerek
    $('.menu-tombol-bermerek').click(function () {
        $('.logo').hide();
        $('.menu').hide();
        $('.daftar').show();

        $('.list-obat').append('<li class="list-group-item list-group-item-info font-weight-bold">Daftar Obat Bermerek</li>');

        // parsing data obat bermerek
        $.ajax({
            url: serverLoc + 'jsonKamus/2',
            type: 'get',
            dataType: 'JSON',
            success: function (response) {
                console.log(response);
                let len = response.length;
                for (let i = 0; i < len; i++) {
                    let kdkamus = response[i].kdkamus;
                    let nama = response[i].nama;

                    $('.list-obat').append('<a href="#" class="list-group-item list-group-item-action">' + nama + '</a>');
                }
            }
        });
        // end parsing data obat bermerek
    });
    // end action tombol bermerek

    // action button close
    $('.btn-close').click(function () {
        $('.logo').show();
        $('.menu').show();
        $('.daftar').hide();

        $('.list-obat').html('');
    });
    // end action button close
});