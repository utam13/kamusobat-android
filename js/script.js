// -----------------------------------------------------------------------------------------
// Get JSON dari server
// atur lokasi server
const serverLoc = 'https://adewidya.com/webadmin/json/';
// const serverLoc = 'http://localhost/kamusobat-webadmin/json/';
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

        $('.judul').html('Daftar Obat Generik');

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

        $('.judul').html('Daftar Obat Bermerek');

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
        $('.loading').hide();

        $('.list-obat').html('');
    });

    $('.btn-close-detail, .btn-close-detail-x').click(function () {
        $('.daftar').show();
        $('.detail').hide();
        $('.loading').hide();
    });
    // end action button close

    // kosongkan form cari
    $('.menu-tombol-cari').click(function () {
        $('#cari-all').val("");
    });

    $('#cari-obat').on('shown.bs.modal', function () {
        $('#cari-all').focus();
    })

    // end action tombol cari

    // pencarian semantik dengan boyer moore
    $('.btn-search-all').click(function () {
        const target = $('#cari-all').val();
        const lenTarget = target.length;

        if (target != " " && lenTarget >= 2) {
            $('.logo').hide();
            $('.menu').hide();
            $('.daftar').show();

            $('.judul').html('Hasil Pencarian');

            // parsing data obat berdasarkan pencarian
            $.ajax({
                url: serverLoc + 'jsonKamus/3/' + target,
                type: 'get',
                dataType: 'JSON',
                success: function (response) {
                    console.log(response);
                    let len = response.length;
                    if (len > 0) {
                        for (let i = 0; i < len; i++) {
                            let kdkamus = response[i].kdkamus;
                            let nama = response[i].nama;

                            $('.list-obat').append('<a href="#" class="list-group-item list-group-item-action" onclick="detail(' + kdkamus + ')">' + nama + '</a>');
                        }
                    } else {
                        alert('Data yang Anda cari "' + target + '" tidak ditemukan');
                        $('.btn-close').click();
                    }
                }
            });

            $('#cari-obat').modal('hide');
            // end parsing data obat berdasarkan pencarian
        } else {
            alert('Isikan pencarian lebih dari 2 karakter');
            $('#cari-all').focus();
        }
    });
    // end pencarian
});


// action list group item
function detail(kode) {
    $('.daftar').hide();
    $('.detail').show();

    // kosongkan detail
    $('.golongan').html("-");
    $('.card-title').html("-");
    $('.kandungan').html("-");
    $('.merk').html("-");
    $('.dosis').html("-");
    $('.efek').html("-");
    $('.peringatan').html("-");
    $('.interaksi').html("-");
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
                let manfaat = response[i].manfaat;
                let golongan = response[i].golongan;
                let dosis = response[i].dosis;
                let efek = response[i].efek;
                let peringatan = response[i].peringatan;
                let interaksi = response[i].interaksi;

                $('.golongan').html(golongan);
                $('.card-title').html(nama);
                $('.kandungan').html(kandungan);
                $('.merk').html(merk);
                $('.manfaat').html(manfaat);
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