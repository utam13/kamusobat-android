// -----------------------------------------------------------------------------------------
// Get JSON dari server
// atur lokasi server
// const serverLoc = 'https://adewidya.com/webadmin/json/';
const serverLoc = 'http://localhost/kamusobat-webadmin/json/';
// ---------------------------------------------------------------------------------------------

$(document).ajaxStart(function () {
    $(".loading").css("display", "block");
});

$(document).ajaxComplete(function () {
    $(".loading").css("display", "none");
});


$(document).ready(function () {
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
            url: serverLoc + 'jsonKamus/1/1',
            type: 'get',
            dataType: 'JSON',
            success: function (response) {
                console.log(response);
                let len = response.length;
                for (let i = 0; i < len; i++) {
                    let kdkamus = response[i].kdkamus;
                    let nama = response[i].nama;

                    $('.list-obat').append('<a href="#" class="list-group-item list-group-item-action" onclick="detail(' + kdkamus + ')">' + nama + '</a>');
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

        $('.list-obat').append('<li class="list-group-item list-group-item-info font-weight-bold>Daftar Obat Bermerek</li>');

        // parsing data obat bermerek
        $.ajax({
            url: serverLoc + 'jsonKamus/1/2',
            type: 'get',
            dataType: 'JSON',
            success: function (response) {
                console.log(response);
                let len = response.length;
                for (let i = 0; i < len; i++) {
                    let kdkamus = response[i].kdkamus;
                    let nama = response[i].nama;

                    $('.list-obat').append('<a href="#" class="list-group-item list-group-item-action" onclick="detail(' + kdkamus + ')">' + nama + '</a>');
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

    $('.btn-close-detail, .btn-close-detail-x').click(function () {
        $('.daftar').show();
        $('.detail').hide();
    });
    // end action button close
});


// action list group item
function detail(kode) {
    $('.daftar').hide();
    $('.detail').show();

    console.log(kode);

    // parsing data detail obat
    $.ajax({
        url: serverLoc + 'jsonKamus/2/' + kode,
        type: 'get',
        dataType: 'JSON',
        success: function (response) {
            console.log(response);
            let len = response.length;
            for (let i = 0; i < len; i++) {
                let kdkamus = response[i].kdkamus;
                let nama = response[i].nama;
                let kandungan = response[i].kandungan;
                let merk = response[i].merk;
                let golongan = response[i].golongan;
                let dosis = response[i].dosis;
                let efek = response[i].efek;
                let peringatan = response[i].peringatan;
                let interaksi = response[i].interaksi;

                $('.golongan').html(golongan);
                $('.card-title').html(nama);
                $('.kandungan').html(kandungan);
                $('.merk').html(merk);
                $('.dosis').html(dosis);
                $('.efek').html(efek);
                $('.peringatan').html(peringatan);
                $('.interaksi').html(interaksi);
            }
        }
    });
    // end parsing data detail obat
}
// end action list group item