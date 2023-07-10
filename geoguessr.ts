import { waitForElement } from "./delay";

// Taken straight from the game code.
const rawTable = [
    {
        title: 'Australia',
        link: 'https://www.google.com/maps/@-25.350684,131.0463223,3a,75y,264.26h,94.34t/data=!3m8!1e1!3m6!1sAF1QipN34Kq9DNXau2fsEX2pXDLZfCICnWaQPku-7FQu!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipN34Kq9DNXau2fsEX2pXDLZfCICnWaQPku-7FQu%3Dw203-h100-k-no-pi-12.154341-ya290.7717-ro-0-fo100!7i10600!8i5300?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332510022!6m8!1m7!1sCAoSLEFGMVFpcE4zNEtxOUROWGF1MmZzRVgycFhETFpmQ0lDbldhUVBrdS03RlF1!2m2!1d-25.35068396746521!2d131.0463222711639!3f264.26!4f4.340000000000003!5f0.7820865974627469'
    },
    {
        title: 'Austria',
        link: 'https://www.google.com/maps/@47.0675829,12.7752697,3a,75y,245.99h,83.11t/data=!3m8!1e1!3m6!1sAF1QipNHsE1rpbN4NKgqGGR_Hzz2odp-bMwQeruFFKa5!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNHsE1rpbN4NKgqGGR_Hzz2odp-bMwQeruFFKa5%3Dw203-h100-k-no-pi0-ya340-ro-0-fo100!7i12000!8i6000?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332514772!6m8!1m7!1sCAoSLEFGMVFpcE5Ic0UxcnBiTjROS2dxR0dSX0h6ejJvZHAtYk13UWVydUZGS2E1!2m2!1d47.06758288466445!2d12.77526967227459!3f245.99!4f-6.890000000000001!5f0.7820865974627469'
    },
    {
        title: 'Belarus',
        link: 'https://www.google.com/maps/place/Muzey+Istorii+Teatral\'noy+I+Muzykal\'noy+Kul\'tury/@53.9054798,27.5601444,3a,90y,49.35h,96.51t/data=!3m6!1e1!3m4!1ss88rdBq5UiYKvp6ojwA7_Q!2e0!7i13312!8i6656!4m17!1m9!3m8!1s0x46da2584e2ad4881:0xa1d181ec8c10!2sBelarus!3b1!8m2!3d53.709807!4d27.953389!10e5!16zL20vMDE2M3Y!3m6!1s0x46dbcfeab3ddf76b:0x4102441cff9e1bc1!8m2!3d53.9051914!4d27.5595092!10e5!16s%2Fg%2F1hc54q1j2?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332520258!6m8!1m7!1ss88rdBq5UiYKvp6ojwA7_Q!2m2!1d53.90547982613528!2d27.56014437433606!3f49.35!4f6.510000000000005!5f0.4000000000000002'
    },
    {
        title: 'Belgium',
        link: 'https://www.google.com/maps/@51.2180796,4.4150183,3a,75y,286.45h,100.66t/data=!3m6!1e1!3m4!1srkFY-BkTJ0-2z2hWjwMHLg!2e0!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332523961!6m8!1m7!1srkFY-BkTJ0-2z2hWjwMHLg!2m2!1d51.21807961391364!2d4.41501826373772!3f286.45!4f10.659999999999997!5f0.7820865974627469'
    },
    {
        title: 'Bulgaria',
        link: 'https://www.google.com/maps/@42.1494591,24.7477184,3a,90y,296.84h,97.19t/data=!3m7!1e1!3m5!1sncjaflFhux3cCQ9oVdgzTg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DncjaflFhux3cCQ9oVdgzTg%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D359.54242%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332538942!6m8!1m7!1sncjaflFhux3cCQ9oVdgzTg!2m2!1d42.14945905626361!2d24.74771841789687!3f296.84!4f7.189999999999998!5f0.4000000000000002'
    },
    {
        title: 'Cambodia',
        link: 'https://www.google.com/maps/@11.5566079,104.9353968,3a,90y,258.58h,101.78t/data=!3m8!1e1!3m6!1sAF1QipMzT_CJp2TIuk4O2ke9ghUioKfm7ccGBuSJk7ub!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMzT_CJp2TIuk4O2ke9ghUioKfm7ccGBuSJk7ub%3Dw203-h100-k-no-pi-0-ya152.46721-ro-0-fo100!7i6080!8i3040?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332542719!6m8!1m7!1sCAoSLEFGMVFpcE16VF9DSnAyVEl1azRPMmtlOWdoVWlvS2ZtN2NjR0J1U0prN3Vi!2m2!1d11.5566079!2d104.9353968!3f258.58!4f11.780000000000001!5f0.4000000000000002'
    },
    {
        title: 'Canada',
        link: 'https://www.google.com/maps/@60.1872492,-134.6889013,3a,75y,125.82h,79.67t/data=!3m8!1e1!3m6!1sAF1QipNvWQOsqWlXPBfQjb3nZyw7BLWeyWUgKrSA8DIl!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNvWQOsqWlXPBfQjb3nZyw7BLWeyWUgKrSA8DIl%3Dw203-h100-k-no-pi-0.112540185-ya59.915157-ro-0-fo100!7i13970!8i6985?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332551821!6m8!1m7!1sCAoSLEFGMVFpcE52V1FPc3FXbFhQQmZRamIzblp5dzdCTFdleVdVZ0tyU0E4REls!2m2!1d60.18724916!2d-134.6889013!3f125.82!4f-10.329999999999998!5f0.7820865974627469'
    },
    {
        title: 'Chile',
        link: 'https://www.google.com/maps/@-42.3318332,-73.3751597,2a,75y,350.28h,110.42t/data=!3m6!1e1!3m4!1sqIYR4B95XigAAAQpm86PUg!2e0!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332554989!6m8!1m7!1sqIYR4B95XigAAAQpm86PUg!2m2!1d-42.33183318859179!2d-73.37515973422785!3f350.28!4f20.42!5f0.7820865974627469'
    },
    {
        title: 'China',
        link: 'https://www.google.com/maps/@30.0525992,121.5109969,3a,90y,6.86h,88.32t/data=!3m8!1e1!3m6!1sAF1QipPpF8NziUhWorpn8SlciBzekKQsf1kz881zYQki!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPpF8NziUhWorpn8SlciBzekKQsf1kz881zYQki%3Dw203-h100-k-no-pi-20-ya304-ro-0-fo100!7i8192!8i4096?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332558536!6m8!1m7!1sCAoSLEFGMVFpcFBwRjhOemlVaFdvcnBuOFNsY2lCemVrS1FzZjFrejg4MXpZUWtp!2m2!1d30.0525992!2d121.5109969!3f6.86!4f-1.6800000000000068!5f0.4000000000000002'
    },
    {
        title: 'Colombia',
        link: 'https://www.google.com/maps/@4.5985391,-74.0681066,3a,75y,280.78h,87.12t/data=!3m7!1e1!3m5!1sZbG88ECu5M1YVxcm7pp78A!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DZbG88ECu5M1YVxcm7pp78A%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D343.3648%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332561586!6m8!1m7!1sZbG88ECu5M1YVxcm7pp78A!2m2!1d4.598539130476504!2d-74.06810659286658!3f280.78!4f-2.8799999999999955!5f0.7820865974627469'
    },
    {
        title: 'Croatia',
        link: 'https://www.google.com/maps/@45.0819259,13.6347638,3a,90y,95.03h,90.52t/data=!3m8!1e1!3m6!1sAF1QipOg1gfcv3mZuo3c1EL38zFiBOosvH7a-Luk2tni!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOg1gfcv3mZuo3c1EL38zFiBOosvH7a-Luk2tni%3Dw203-h100-k-no-pi-0-ya47.37348-ro-0-fo100!7i7500!8i3750?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332568377!6m8!1m7!1sCAoSLEFGMVFpcE9nMWdmY3YzbVp1bzNjMUVMMzh6RmlCT29zdkg3YS1MdWsydG5p!2m2!1d45.08192591163372!2d13.63476375882529!3f95.03!4f0.519999999999996!5f0.4000000000000002'
    },
    {
        title: 'Denmark',
        link: 'https://www.google.com/maps/@56.6525516,8.5262593,3a,75y,69.18h,93.33t/data=!3m6!1e1!3m4!1sJo2m04ymc8xFmGFYNH2Tyw!2e0!7i16384!8i8192?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332575021!6m8!1m7!1sJo2m04ymc8xFmGFYNH2Tyw!2m2!1d56.65255161375055!2d8.52625930536295!3f69.18!4f3.3299999999999983!5f0.7820865974627469'
    },
    {
        title: 'El Salvador',
        link: 'https://www.google.com/maps/@13.3166881,-87.764475,3a,75y,313.25h,90.97t/data=!3m8!1e1!3m6!1sAF1QipODiqBlaoA8KvKv53Jf9DUfPazARV9CPfbWtgbK!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipODiqBlaoA8KvKv53Jf9DUfPazARV9CPfbWtgbK%3Dw203-h100-k-no-pi-10-ya20-ro-0-fo100!7i8192!8i4096?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332589227!6m8!1m7!1sCAoSLEFGMVFpcE9EaXFCbGFvQThLdkt2NTNKZjlEVWZQYXpBUlY5Q1BmYld0Z2JL!2m2!1d13.3166881!2d-87.76447499999999!3f313.25!4f0.9699999999999989!5f0.7820865974627469'
    },
    {
        title: 'Estonia',
        link: 'https://www.google.com/maps/@58.5323683,25.2541517,3a,75y,209.83h,83.08t/data=!3m8!1e1!3m6!1sAF1QipPLSfa0p0ALRicB8oqZOuZNZGL1CV3H3f5mcNxZ!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPLSfa0p0ALRicB8oqZOuZNZGL1CV3H3f5mcNxZ%3Dw203-h100-k-no-pi0-ya229.30869-ro0-fo100!7i8192!8i4096?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332592322!6m8!1m7!1sCAoSLEFGMVFpcFBMU2ZhMHAwQUxSaWNCOG9xWk91Wk5aR0wxQ1YzSDNmNW1jTnha!2m2!1d58.53236829999999!2d25.2541517!3f209.83!4f-6.920000000000002!5f0.7820865974627469'
    },
    {
        title: 'Finland',
        link: 'https://www.google.com/maps/@60.1378835,24.990532,3a,75y,265.93h,93.25t/data=!3m8!1e1!3m6!1sAF1QipNjv6f1smybA4dP0uRoIyw_GIbnReVkALNVG3I!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNjv6f1smybA4dP0uRoIyw_GIbnReVkALNVG3I%3Dw203-h100-k-no-pi-0-ya131.89162-ro-0-fo100!7i12000!8i6000?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332601363!6m8!1m7!1sCAoSK0FGMVFpcE5qdjZmMXNteWJBNGRQMHVSb0l5d19HSWJuUmVWa0FMTlZHM0k.!2m2!1d60.1378835301528!2d24.99053198844194!3f265.93!4f3.25!5f0.7820865974627469'
    },
    {
        title: 'Georgia',
        link: 'https://www.google.com/maps/@41.673687,44.7001648,3a,90y,273.65h,94.23t/data=!3m8!1e1!3m6!1sAF1QipP7zxCvlgC4OSmyogVOtTIcpywfxMb1SEJ_u5AI!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipP7zxCvlgC4OSmyogVOtTIcpywfxMb1SEJ_u5AI%3Dw203-h100-k-no-pi-0-ya181-ro-0-fo100!7i8704!8i4352?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332608703!6m8!1m7!1sCAoSLEFGMVFpcFA3enhDdmxnQzRPU215b2dWT3RUSWNweXdmeE1iMVNFSl91NUFJ!2m2!1d41.673687!2d44.7001648!3f273.65!4f4.230000000000004!5f0.4000000000000002'
    },
    {
        title: 'Germany',
        link: 'https://www.google.com/maps/@47.737947,7.6892312,3a,75y,226.36h,109.5t/data=!3m8!1e1!3m6!1sAF1QipMPKawADsqR1qnoUutccjsFqV5458Fo6pNZQl0!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMPKawADsqR1qnoUutccjsFqV5458Fo6pNZQl0%3Dw203-h100-k-no-pi-0-ya324.57867-ro-0-fo100!7i8704!8i4352?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332611797!6m8!1m7!1sCAoSK0FGMVFpcE1QS2F3QURzcVIxcW5vVXV0Y2Nqc0ZxVjU0NThGbzZwTlpRbDA.!2m2!1d47.737947!2d7.689231200000001!3f226.36!4f19.5!5f0.7820865974627469'
    },
    {
        title: 'Hungary',
        link: 'https://www.google.com/maps/@47.1917777,18.4107785,3a,90y,230.2h,79.11t/data=!3m8!1e1!3m6!1sAF1QipPv-pCjLbZrWV1hu0oP69sTqvgV9pTZqjtV48tj!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPv-pCjLbZrWV1hu0oP69sTqvgV9pTZqjtV48tj%3Dw203-h100-k-no-pi-0-ya103.78106-ro-0-fo100!7i9000!8i4500?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332628469!6m8!1m7!1sCAoSLEFGMVFpcFB2LXBDakxiWnJXVjFodTBvUDY5c1RxdmdWOXBUWnFqdFY0OHRq!2m2!1d47.19177768270664!2d18.4107785381816!3f230.2!4f-10.89!5f0.4000000000000002'
    },
    {
        title: 'Iceland',
        link: 'https://www.google.com/maps/@64.7826033,-21.5608493,3a,75y,65.64h,91.3t/data=!3m8!1e1!3m6!1sAF1QipO1f6D2pcMk2a5EoVY_3DZGkxUclie2vhCA6SEt!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipO1f6D2pcMk2a5EoVY_3DZGkxUclie2vhCA6SEt%3Dw203-h100-k-no-pi-5.0643086-ya304.05145-ro-0-fo100!7i8704!8i4352?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332631583!6m8!1m7!1sCAoSLEFGMVFpcE8xZjZEMnBjTWsyYTVFb1ZZXzNEWkdreFVjbGllMnZoQ0E2U0V0!2m2!1d64.78260329999999!2d-21.5608493!3f65.64!4f1.2999999999999972!5f0.7820865974627469'
    },
    {
        title: 'Indonesia',
        link: 'https://www.google.com/maps/@-3.8433943,122.0486517,3a,90y,290.41h,80.33t/data=!3m6!1e1!3m4!1svvtoiual62rn1U6c2NvRnQ!2e0!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332634720!6m8!1m7!1svvtoiual62rn1U6c2NvRnQ!2m2!1d-3.843394332539138!2d122.0486517430776!3f290.41!4f-9.670000000000002!5f0.4000000000000002'
    },
    {
        title: 'Israel',
        link: 'https://www.google.com/maps/@32.056203,34.750012,3a,75y,138.82h,83.17t/data=!3m8!1e1!3m6!1sAF1QipMXWMsEgekhu28ctRhoPtxtV_3dXbRjJ-ADf-r1!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMXWMsEgekhu28ctRhoPtxtV_3dXbRjJ-ADf-r1%3Dw203-h100-k-no-pi-0-ya20.689228-ro-0-fo100!7i12000!8i6000?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332638968!6m8!1m7!1sCAoSLEFGMVFpcE1YV01zRWdla2h1MjhjdFJob1B0eHRWXzNkWGJSakotQURmLXIx!2m2!1d32.056203!2d34.750012!3f138.82!4f-6.829999999999998!5f0.7820865974627469'
    },
    {
        title: 'Japan',
        link: 'https://www.google.com/maps/@36.9026466,138.1437857,3a,90y,79.75h,70.67t/data=!3m8!1e1!3m6!1sAF1QipM44e6BIfnxByujTufJIHJaB7S-Uuy26YRF5bHx!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipM44e6BIfnxByujTufJIHJaB7S-Uuy26YRF5bHx%3Dw203-h100-k-no-pi-0.112540185-ya359.88745-ro-0-fo100!7i8704!8i4352?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332645455!6m8!1m7!1sCAoSLEFGMVFpcE00NGU2QklmbnhCeXVqVHVmSklISmFCN1MtVXV5MjZZUkY1Ykh4!2m2!1d36.9026466!2d138.1437857!3f79.75!4f-19.33!5f0.4000000000000002'
    },
    {
        title: 'Kenya',
        link: 'https://www.google.com/maps/@-3.9941269,39.6959344,3a,75y,165.56h,89.86t/data=!3m6!1e1!3m4!1s5U9Rh5BRuFrCA5dOBChIJQ!2e0!7i16384!8i8192?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332651820!6m8!1m7!1s5U9Rh5BRuFrCA5dOBChIJQ!2m2!1d-3.994126918268447!2d39.69593443016079!3f165.56!4f-0.14000000000000057!5f0.7820865974627469'
    },
    {
        title: 'Kuwait',
        link: 'https://www.google.com/maps/@29.3495474,48.0892503,3a,75y,312.41h,88.53t/data=!3m8!1e1!3m6!1sAF1QipPfgkHJK-z2dUnXwvtrOQAW0OrKaCCaNx8o1YQ2!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPfgkHJK-z2dUnXwvtrOQAW0OrKaCCaNx8o1YQ2%3Dw203-h100-k-no-pi-10-ya320-ro-0-fo100!7i8192!8i4096?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332655952!6m8!1m7!1sCAoSLEFGMVFpcFBmZ2tISkstejJkVW5Yd3Z0ck9RQVcwT3JLYUNDYU54OG8xWVEy!2m2!1d29.3495474!2d48.0892503!3f312.41!4f-1.4699999999999989!5f0.7820865974627469'
    },
    {
        title: 'Liberia',
        link: 'https://www.google.com/maps/@6.3172542,-10.8066699,3a,90y,50.26h,96.11t/data=!3m7!1e1!3m5!1sAF1QipOPpDjxiVsIlqxYoQ_CrtotKJkhfbZOfbyJStR9!2e10!3e11!7i7680!8i3840?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332662148!6m8!1m7!1sCAoSLEFGMVFpcE9QcERqeGlWc0lscXhZb1FfQ3J0b3RLSmtoZmJaT2ZieUpTdFI5!2m2!1d6.317254223164158!2d-10.80666989120235!3f50.26!4f6.109999999999999!5f0.4000000000000002'
    },
    {
        title: 'Madagascar',
        link: 'https://www.google.com/maps/@-18.9234437,47.5319465,2a,75y,72.19h,100.77t/data=!3m7!1e1!3m5!1sYohII4q3A6QYAaDyJI_-KQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DYohII4q3A6QYAaDyJI_-KQ%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D279.88742%26pitch%3D-20.11257%26thumbfov%3D100!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332669517!6m8!1m7!1sYohII4q3A6QYAaDyJI_-KQ!2m2!1d-18.92344366752726!2d47.53194652035273!3f72.19!4f10.769999999999996!5f0.7820865974627469'
    },
    {
        title: 'Nepal',
        link: 'https://www.google.com/maps/@28.7616414,83.6368122,3a,90y,147.07h,91.39t/data=!3m8!1e1!3m6!1sAF1QipNV1GayRarrJR3VIg_FQUFVNI-d0b-nrwhhpK_U!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNV1GayRarrJR3VIg_FQUFVNI-d0b-nrwhhpK_U%3Dw203-h100-k-no-pi-0-ya56.000004-ro-0-fo100!7i10240!8i5120?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332693221!6m8!1m7!1sCAoSLEFGMVFpcE5WMUdheVJhcnJKUjNWSWdfRlFVRlZOSS1kMGItbnJ3aGhwS19V!2m2!1d28.76164139999999!2d83.6368122!3f147.07!4f1.3900000000000006!5f0.4000000000000002'
    },
    {
        title: 'New Zealand',
        link: 'https://www.google.com/maps/@-37.8717785,175.6828837,3a,75y,142h,87.82t/data=!3m6!1e1!3m4!1sZafOzmzIQnx7u7CnD0dMkg!2e0!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332696468!6m8!1m7!1sZafOzmzIQnx7u7CnD0dMkg!2m2!1d-37.87177853802388!2d175.682883726137!3f142!4f-2.180000000000007!5f0.7820865974627469'
    },
    {
        title: 'Norway',
        link: 'https://www.google.com/maps/@58.721475,9.235935,3a,75y,184.68h,81.84t/data=!3m6!1e1!3m4!1sflanBzb_7quSGyG9vP9DmA!2e0!7i16384!8i8192?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332700135!6m8!1m7!1sflanBzb_7quSGyG9vP9DmA!2m2!1d58.72147503485372!2d9.235934985588043!3f184.68!4f-8.159999999999997!5f0.7820865974627469'
    },
    {
        title: 'Peru',
        link: 'https://www.google.com/maps/@-13.3299509,-72.1971049,3a,90y,136.39h,84.52t/data=!3m8!1e1!3m6!1sAF1QipNG62Q7pKXw4-wX4xblhRYXjcNp8tT9ytv2a0wL!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNG62Q7pKXw4-wX4xblhRYXjcNp8tT9ytv2a0wL%3Dw203-h100-k-no-pi0-ya1.3773088-ro-0-fo100!7i6656!8i3328?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332707150!6m8!1m7!1sCAoSLEFGMVFpcE5HNjJRN3BLWHc0LXdYNHhibGhSWVhqY05wOHRUOXl0djJhMHdM!2m2!1d-13.3299509!2d-72.1971049!3f136.39!4f-5.480000000000004!5f0.4000000000000002'
    },
    {
        title: 'Philippines',
        link: 'https://www.google.com/maps/@14.6296075,121.0964071,3a,90y,152.33h,94.9t/data=!3m6!1e1!3m4!1shDbmXwkTQv1NYH36K6Vr2A!2e0!7i16384!8i8192?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332710402!6m8!1m7!1shDbmXwkTQv1NYH36K6Vr2A!2m2!1d14.62960745037837!2d121.0964071307574!3f152.33!4f4.900000000000006!5f0.4000000000000002'
    },
    {
        title: 'Portugal',
        link: 'https://www.google.com/maps/@38.709765,-9.1335375,3a,90y,46.68h,103.28t/data=!3m7!1e1!3m5!1sSZ1ENOyWibCarEvBdMM_lg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DSZ1ENOyWibCarEvBdMM_lg%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D66.14479%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332713772!6m8!1m7!1sSZ1ENOyWibCarEvBdMM_lg!2m2!1d38.70976500817227!2d-9.133537484566608!3f46.68!4f13.280000000000001!5f0.4000000000000002'
    },
    {
        title: 'Romania',
        link: 'https://www.google.com/maps/@44.4268929,26.1029659,3a,90y,242.94h,79.39t/data=!3m7!1e1!3m5!1sV8CqZprZitaQJynaUAjEAw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DV8CqZprZitaQJynaUAjEAw%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D232.60112%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332719970!6m8!1m7!1sV8CqZprZitaQJynaUAjEAw!2m2!1d44.42689291919224!2d26.10296593559447!3f242.94!4f-10.61!5f0.4000000000000002'
    },
    {
        title: 'Russia',
        link: 'https://www.google.com/maps/@55.7317335,37.50607,3a,90y,268.32h,109.04t/data=!3m8!1e1!3m6!1sAF1QipPF0nkb1BphX6nNlCFBbGPGGQpV2e0b0R1qAPAS!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPF0nkb1BphX6nNlCFBbGPGGQpV2e0b0R1qAPAS%3Dw203-h100-k-no-pi-7.990353-ya159.14302-ro0-fo100!7i6000!8i3000?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332723639!6m8!1m7!1sCAoSLEFGMVFpcFBGMG5rYjFCcGhYNm5ObENGQmJHUEdHUXBWMmUwYjBSMXFBUEFT!2m2!1d55.73173347549965!2d37.50606995075941!3f268.32!4f19.040000000000006!5f0.4000000000000002'
    },
    {
        title: 'Slovenia',
        link: 'https://www.google.com/maps/@46.5602916,15.6494557,3a,90y,120.87h,108.58t/data=!3m6!1e1!3m4!1ssNFPSsrlsNTIDAcHLasCIw!2e0!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332731147!6m8!1m7!1ssNFPSsrlsNTIDAcHLasCIw!2m2!1d46.56029155259352!2d15.64945569779819!3f120.87!4f18.58!5f0.4000000000000002'
    },
    {
        title: 'Venezuela',
        link: 'https://www.google.com/maps/@10.5132439,-66.9125697,3a,90y,172.89h,96.27t/data=!3m6!1e1!3m4!1sAF1QipMbqPPfLC_S0tN8EfzjYT7E1MZx__mHgL_4g4XM!2e10!7i8000!8i4000?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332761420!6m8!1m7!1sCAoSLEFGMVFpcE1icVBQZkxDX1MwdE44RWZ6allUN0UxTVp4X19tSGdMXzRnNFhN!2m2!1d10.5132439351186!2d-66.9125697389245!3f172.89!4f6.269999999999996!5f0.4000000000000002'
    },
    {
        title: 'Albania',
        link: 'https://www.google.com/maps/@41.7848555,19.6466145,3a,75y,349.04h,83.42t/data=!3m8!1e1!3m6!1sAF1QipNinVjWOad3Rxb7XNBtV-RuosgnwYaI24bVQgn1!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNinVjWOad3Rxb7XNBtV-RuosgnwYaI24bVQgn1%3Dw203-h100-k-no-pi-0-ya291.11536-ro0-fo100!7i12000!8i6000?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119136328!6m8!1m7!1sCAoSLEFGMVFpcE5pblZqV09hZDNSeGI3WE5CdFYtUnVvc2dud1lhSTI0YlZRZ24x!2m2!1d41.784855531691!2d19.646614490124!3f349.04!4f-6.579999999999998!5f0.7820865974627469'
    },
    {
        title: 'Australia',
        link: 'https://www.google.com/maps/@-23.6628771,133.8225821,3a,90y,237.77h,83.78t/data=!3m8!1e1!3m6!1sAF1QipOiLDVehGHGqBbzSkkbuknyY7UgOEsNI9IQTstN!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOiLDVehGHGqBbzSkkbuknyY7UgOEsNI9IQTstN%3Dw203-h100-k-no-pi-0-ya123-ro-0-fo100!7i8704!8i4352?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119146820!6m8!1m7!1sCAoSLEFGMVFpcE9pTERWZWhHSEdxQmJ6U2trYnVrbnlZN1VnT0VzTkk5SVFUc3RO!2m2!1d-23.6628771!2d133.8225821!3f237.77!4f-6.219999999999999!5f0.4000000000000002'
    },
    {
        title: 'Belgium',
        link: 'https://www.google.com/maps/@51.2089881,2.8846616,3a,75y,77.68h,86.15t/data=!3m7!1e1!3m5!1sjT026m8Nhnp7aQIXqudXeQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DjT026m8Nhnp7aQIXqudXeQ%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D335.1454%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119150490!6m8!1m7!1sjT026m8Nhnp7aQIXqudXeQ!2m2!1d51.20898806548806!2d2.884661580230813!3f77.68!4f-3.8499999999999943!5f0.7820865974627469'
    },
    {
        title: 'Botswana',
        link: 'https://www.google.com/maps/@-20.5000325,25.1290002,3a,75y,252.33h,85.04t/data=!3m8!1e1!3m6!1sAF1QipMDuc5f1dsCAzL9Cq4ESTWWjJCRmiztQydJ4_cq!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMDuc5f1dsCAzL9Cq4ESTWWjJCRmiztQydJ4_cq%3Dw203-h100-k-no-pi-0.37066647-ya234.55408-ro-0.0015957364-fo100!7i8192!8i4096?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119154762!6m8!1m7!1sCAoSLEFGMVFpcE1EdWM1ZjFkc0NBekw5Q3E0RVNUV1dqSkNSbWl6dFF5ZEo0X2Nx!2m2!1d-20.5000325!2d25.1290002!3f252.33!4f-4.959999999999994!5f0.7820865974627469'
    },
    {
        title: 'Brazil',
        link: 'https://www.google.com/maps/@-0.6806566,-50.9875341,3a,90y,116.76h,88.38t/data=!3m8!1e1!3m6!1sAF1QipOsZSpaZY1uoi0ESN1qBr59c0AmsDULNnj6PQON!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOsZSpaZY1uoi0ESN1qBr59c0AmsDULNnj6PQON%3Dw203-h100-k-no-pi0-ya348-ro-0-fo100!7i8192!8i4096?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119159032!6m8!1m7!1sCAoSLEFGMVFpcE9zWlNwYVpZMXVvaTBFU04xcUJyNTljMEFtc0RVTE5uajZQUU9O!2m2!1d-0.6806566!2d-50.9875341!3f116.76!4f-1.6200000000000045!5f0.4000000000000002'
    },
    {
        title: 'Colombia',
        link: 'https://www.google.com/maps/@3.8597977,-76.5402389,3a,89.6y,268.63h,93.31t/data=!3m7!1e1!3m5!1s0owHJBDb2iocP6zfIwfe4w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D0owHJBDb2iocP6zfIwfe4w%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D321.72473%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119182731!6m8!1m7!1s0owHJBDb2iocP6zfIwfe4w!2m2!1d3.859797749837747!2d-76.5402388588541!3f268.63!4f3.3100000000000023!5f0.41007199324273763'
    },
    {
        title: 'Croatia',
        link: 'https://www.google.com/maps/@45.0818662,13.6344663,3a,75y,28.73h,90.79t/data=!3m8!1e1!3m6!1sAF1QipNxu5Kc6xxdunr1xW0Sq-mKCDb927to-swDSb4q!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNxu5Kc6xxdunr1xW0Sq-mKCDb927to-swDSb4q%3Dw203-h100-k-no-pi1.7888254-ya287.53204-ro-0.705416-fo100!7i7680!8i3840?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119196042!6m8!1m7!1sCAoSLEFGMVFpcE54dTVLYzZ4eGR1bnIxeFcwU3EtbUtDRGI5Mjd0by1zd0RTYjRx!2m2!1d45.08186619968883!2d13.63446634306079!3f28.73!4f0.7900000000000063!5f0.7820865974627469'
    },
    {
        title: 'El Salvador',
        link: 'https://www.google.com/maps/@13.7090322,-89.2134698,3a,75y,62.38h,80.54t/data=!3m8!1e1!3m6!1sAF1QipPp_ORnqpZzWAs3pPtyYyFMUotw5eLwXYqV9FhI!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPp_ORnqpZzWAs3pPtyYyFMUotw5eLwXYqV9FhI%3Dw203-h100-k-no-pi-2.920129-ya157.55408-ro1.6578418-fo100!7i8192!8i4096?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119216166!6m8!1m7!1sCAoSLEFGMVFpcFBwX09SbnFwWnpXQXMzcFB0eVl5Rk1Vb3R3NWVMd1hZcVY5RmhJ!2m2!1d13.70903218817429!2d-89.21346977598941!3f62.38!4f-9.459999999999994!5f0.7820865974627469'
    },
    {
        title: 'Germany',
        link: 'https://www.google.com/maps/@47.9951764,7.8529328,3a,74.5y,326.02h,114.9t/data=!3m8!1e1!3m6!1sAF1QipM7l-6U8Z7w57_nCeqbllh1hShZ1Tb7KatMH1OH!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipM7l-6U8Z7w57_nCeqbllh1hShZ1Tb7KatMH1OH%3Dw203-h100-k-no-pi-17.10611-ya346.90536-ro-0-fo100!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119232778!6m8!1m7!1sCAoSLEFGMVFpcE03bC02VThaN3c1N19uQ2VxYmxsaDFoU2haMVRiN0thdE1IMU9I!2m2!1d47.99517639017938!2d7.852932849698391!3f326.02!4f24.900000000000006!5f0.7951360383703611'
    },
    {
        title: 'Ghana',
        link: 'https://www.google.com/maps/@6.6957825,-1.6165838,3a,90y,257.8h,81.84t/data=!3m7!1e1!3m5!1ss2jaeN-KjhsrQLbcMiGrpQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Ds2jaeN-KjhsrQLbcMiGrpQ%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D326.98788%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119235842!6m8!1m7!1ss2jaeN-KjhsrQLbcMiGrpQ!2m2!1d6.695782542655994!2d-1.616583768625464!3f257.8!4f-8.159999999999997!5f0.4000000000000002'
    },
    {
        title: 'India',
        link: 'https://www.google.com/maps/@26.923828,75.8270749,3a,75y,285.54h,105.75t/data=!3m6!1e1!3m4!1s1Axyv3l_iqt9yWzC4gIdqg!2e0!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119247070!6m8!1m7!1s1Axyv3l_iqt9yWzC4gIdqg!2m2!1d26.9238280486489!2d75.82707492149625!3f285.54!4f15.75!5f0.7820865974627469'
    },
    {
        title: 'Indonesia',
        link: 'https://www.google.com/maps/@-3.0825232,119.9169088,3a,75y,228.56h,98.57t/data=!3m6!1e1!3m4!1s26jryH9JuOBs4IO9Y1QmOw!2e0!7i16384!8i8192?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119250014!6m8!1m7!1s26jryH9JuOBs4IO9Y1QmOw!2m2!1d-3.082523173064316!2d119.9169088254661!3f228.56!4f8.569999999999993!5f0.7820865974627469'
    },
    {
        title: 'Iran',
        link: 'https://www.google.com/maps/@30.4325525,56.057296,3a,75y,151.04h,95.09t/data=!3m8!1e1!3m6!1sAF1QipO3JLTtHCK62IXs7Ja_EfxD9wlU_Ge8jPPKMCZW!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipO3JLTtHCK62IXs7Ja_EfxD9wlU_Ge8jPPKMCZW%3Dw203-h100-k-no-pi-10-ya189.07047-ro-0-fo100!7i5940!8i2970?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119253733!6m8!1m7!1sCAoSLEFGMVFpcE8zSkxUdEhDSzYySVhzN0phX0VmeEQ5d2xVX0dlOGpQUEtNQ1pX!2m2!1d30.43255247853044!2d56.05729599476224!3f151.04!4f5.090000000000003!5f0.7820865974627469'
    },
    {
        title: 'Italy',
        link: 'https://www.google.com/maps/@41.8982242,12.4731588,3a,90y,175.69h,83.45t/data=!3m8!1e1!3m6!1sAF1QipPaNur2R3fJWzM5XCDlEPK7i9CQ7asIMgjjJO6L!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPaNur2R3fJWzM5XCDlEPK7i9CQ7asIMgjjJO6L%3Dw203-h100-k-no-pi-0-ya248.70602-ro-0-fo100!7i6528!8i3264?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119265815!6m8!1m7!1sCAoSLEFGMVFpcFBhTnVyMlIzZkpXek01WENEbEVQSzdpOUNRN2FzSU1nampKTzZM!2m2!1d41.898224225052!2d12.47315876255!3f175.69!4f-6.549999999999997!5f0.4000000000000002'
    },
    {
        title: 'Japan',
        link: 'https://www.google.com/maps/@36.7326326,138.4621769,2a,75y,132.59h,75.21t/data=!3m7!1e1!3m5!1s-_0l0tU3lKz0JtaEsqJk7w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D-_0l0tU3lKz0JtaEsqJk7w%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D294.00262%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119273227!6m8!1m7!1s-_0l0tU3lKz0JtaEsqJk7w!2m2!1d36.732632613848!2d138.4621769294279!3f132.59!4f-14.790000000000006!5f0.7820865974627469'
    },
    {
        title: 'Jordan',
        link: 'https://www.google.com/maps/@31.9516112,35.9393884,2a,75y,308.12h,83.76t/data=!3m7!1e1!3m5!1siUBbBTb3yDoFEFhUe4GnCg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DiUBbBTb3yDoFEFhUe4GnCg%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D126.0864%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119276293!6m8!1m7!1siUBbBTb3yDoFEFhUe4GnCg!2m2!1d31.95161115368211!2d35.93938839552868!3f308.12!4f-6.239999999999995!5f0.7820865974627469'
    },
    {
        title: 'Kenya',
        link: 'https://www.google.com/maps/@-1.2839794,36.8208278,3a,90y,336.57h,88.24t/data=!3m6!1e1!3m4!1sGwPdUdRZdv9AXcFndU_EOQ!2e0!7i16384!8i8192?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119279399!6m8!1m7!1sGwPdUdRZdv9AXcFndU_EOQ!2m2!1d-1.283979405927672!2d36.82082780827069!3f336.57!4f-1.7600000000000051!5f0.4000000000000002'
    },
    {
        title: 'Latvia',
        link: 'https://www.google.com/maps/@56.9474378,24.1063499,3a,90y,91.94h,96.81t/data=!3m6!1e1!3m4!1s-36m3Um4REUCCCjuzfjYaA!2e0!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119286097!6m8!1m7!1s-36m3Um4REUCCCjuzfjYaA!2m2!1d56.9474378136615!2d24.10634993779821!3f91.94!4f6.810000000000002!5f0.4000000000000002'
    },
    {
        title: 'Lithuania',
        link: 'https://www.google.com/maps/@55.798336,21.0670862,3a,75y,334.07h,87.38t/data=!3m8!1e1!3m6!1sAF1QipNSDdBQRgxfsZ-7vVIbXh7OvjiZldscjXjuxsII!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNSDdBQRgxfsZ-7vVIbXh7OvjiZldscjXjuxsII%3Dw203-h100-k-no-pi-0-ya9.096276-ro-0-fo100!7i9204!8i4602?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119299805!6m8!1m7!1sCAoSLEFGMVFpcE5TRGRCUVJneGZzWi03dlZJYlhoN092amlabGRzY2pYanV4c0lJ!2m2!1d55.79833599951167!2d21.06708616018295!3f334.07!4f-2.6200000000000045!5f0.7820865974627469'
    },
    {
        title: 'Malaysia',
        link: 'https://www.google.com/maps/@3.2375917,101.684043,3a,90y,7.13h,116.58t/data=!3m8!1e1!3m6!1sAF1QipNCtfgdaFJRxi3C4YPLoBPdwp3ba8gYPG_UHoHd!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNCtfgdaFJRxi3C4YPLoBPdwp3ba8gYPG_UHoHd%3Dw203-h100-k-no-pi-0-ya290.8275-ro0-fo100!7i8704!8i4352?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119309719!6m8!1m7!1sCAoSLEFGMVFpcE5DdGZnZGFGSlJ4aTNDNFlQTG9CUGR3cDNiYThnWVBHX1VIb0hk!2m2!1d3.2375917!2d101.684043!3f7.13!4f26.58!5f0.4000000000000002'
    },
    {
        title: 'Netherlands',
        link: 'https://www.google.com/maps/@52.113111,4.2802872,3a,90y,199.78h,96.26t/data=!3m6!1e1!3m4!1sj1uAVlzaTU4GQyduJYzjuA!2e0!7i16384!8i8192?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119343452!6m8!1m7!1sj1uAVlzaTU4GQyduJYzjuA!2m2!1d52.11311104606541!2d4.28028724851124!3f199.78!4f6.260000000000005!5f0.4000000000000002'
    },
    {
        title: 'New Zealand',
        link: 'https://www.google.com/maps/@-39.5010522,176.9184996,3a,90y,68.64h,88.81t/data=!3m6!1e1!3m4!1sJCSiYBxjbDe_EPTZw_7gDQ!2e0!7i16384!8i8192?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119346564!6m8!1m7!1sJCSiYBxjbDe_EPTZw_7gDQ!2m2!1d-39.5010521533879!2d176.918499552169!3f68.64!4f-1.1899999999999977!5f0.4000000000000002'
    },
    {
        title: 'Nigeria',
        link: 'https://www.google.com/maps/@9.0809615,7.5243988,2a,90y,84.34h,85.05t/data=!3m6!1e1!3m4!1sINHBz4HdSwMAAAQrBnftjg!2e0!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119352692!6m8!1m7!1sINHBz4HdSwMAAAQrBnftjg!2m2!1d9.080961517214682!2d7.524398838108427!3f84.34!4f-4.950000000000003!5f0.4000000000000002'
    },
    {
        title: 'Poland',
        link: 'https://www.google.com/maps/@52.2494052,20.9923145,3a,90y,99.76h,104.25t/data=!3m6!1e1!3m4!1seXEScTe7gqoljTOV4M_1PA!2e0!7i16384!8i8192?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119378940!6m8!1m7!1seXEScTe7gqoljTOV4M_1PA!2m2!1d52.24940517758763!2d20.99231454742342!3f99.76!4f14.25!5f0.4000000000000002'
    },
    {
        title: 'Singapore',
        link: 'https://www.google.com/maps/@1.2806527,103.8642833,2a,90y,41.99h,89.35t/data=!3m7!1e1!3m5!1sb7tYegC8sOpQiSgx9CjtNA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Db7tYegC8sOpQiSgx9CjtNA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D84.62819%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119382058!6m8!1m7!1sb7tYegC8sOpQiSgx9CjtNA!2m2!1d1.280652667541553!2d103.8642833171509!3f41.99!4f-0.6500000000000057!5f0.4000000000000002'
    },
    {
        title: 'Spain',
        link: 'https://www.google.com/maps/@37.1760783,-3.5881413,3a,90y,12.6h,91.86t/data=!3m8!1e1!3m6!1sAF1QipP9qAD3ssenWODwqFLIT6VbwAD4FzlXgKbgmht7!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipP9qAD3ssenWODwqFLIT6VbwAD4FzlXgKbgmht7%3Dw203-h100-k-no-pi-0-ya139.54929-ro0-fo100!7i6144!8i3072?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119386122!6m8!1m7!1sCAoSLEFGMVFpcFA5cUFEM3NzZW5XT0R3cUZMSVQ2VmJ3QUQ0RnpsWGdLYmdtaHQ3!2m2!1d37.1760783!2d-3.5881413!3f12.6!4f1.8599999999999994!5f0.4000000000000002'
    },
    {
        title: 'Sweden',
        link: 'https://www.google.com/maps/@65.8055012,21.678883,3a,90y,202.99h,90.85t/data=!3m7!1e1!3m5!1sO7gt2w-yxeZI97e82gkunQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DO7gt2w-yxeZI97e82gkunQ%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D194.25218%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119389195!6m8!1m7!1sO7gt2w-yxeZI97e82gkunQ!2m2!1d65.80550118091678!2d21.67888296764118!3f202.99!4f0.8499999999999943!5f0.4000000000000002'
    }
];

const table = Object.fromEntries(rawTable.map((entry) => [entry.embed, entry.title.toLowerCase().replaceAll(" ", "")]));

export async function sniffGeoguessr() {
    const { element: mapsEmbed, loadTicks } = await waitForElement(".geo-wrapper .geo", 60);

    const srcURL = (mapsEmbed as HTMLIFrameElement).src;
    return { country: table[srcURL], loadTicks };
}