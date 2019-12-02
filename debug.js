const SpotifyWebApi = require('spotify-web-api-node');
const CLIENT_ID = "ab78c9bfe2104f2e9e01b86f908541a9";
const CLIENT_SECRET = "5065d0f119f5424796fbc25fc5346c4c";

const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
});

spotifyApi.setAccessToken('BQA3jI2i4-qXTPV1JYiM5bGkM_88jSmyJN_JNC8aP_StXGolSEN3owtNgMpuhXwImbCkjh_E4jhJdx_Q3McgdkW39auuUDBscg_XvFiJ1-MYX772JpaIB2P6GxBl-NJtxuseXs1ShWKet0H1_EFtG_fl2gk2Hyc_6Bc');

spotifyApi.searchArtists('Beyonce')
    .then(function (data) {
        console.log('Search artists by "Beyonce"', JSON.stringify(data.body, null, 2));
    }, function (err) {
        console.error(err);
    })


