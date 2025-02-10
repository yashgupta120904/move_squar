'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".dart_tool/dartpad/web_plugin_registrant.dart": "7ed35bc85b7658d113371ffc24d07117",
".dart_tool/extension_discovery/vs_code.json": "65fae26c191c04d448884c8821265c1b",
".dart_tool/flutter_build/9be8eb09b53c1b79ca5077ff15732594/app.dill": "70807b65c8ee6c83805e2cac34f13ac5",
".dart_tool/flutter_build/9be8eb09b53c1b79ca5077ff15732594/app.dill.deps": "a7ef217fae2bc1ff9ca24fcb2a0b32e0",
".dart_tool/flutter_build/9be8eb09b53c1b79ca5077ff15732594/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
".dart_tool/flutter_build/9be8eb09b53c1b79ca5077ff15732594/main.dart": "4810414f1e42b7f91bedbb449594a930",
".dart_tool/flutter_build/9be8eb09b53c1b79ca5077ff15732594/web_entrypoint.stamp": "325c66cd660a3abb0bff92791707d921",
".dart_tool/flutter_build/9be8eb09b53c1b79ca5077ff15732594/web_plugin_registrant.dart": "7ed35bc85b7658d113371ffc24d07117",
".dart_tool/flutter_build/9be8eb09b53c1b79ca5077ff15732594/web_static_assets.stamp": "4e4eca486ddd0530407d1c1094fdb4af",
".dart_tool/flutter_build/9be8eb09b53c1b79ca5077ff15732594/web_templated_files.stamp": "37df692f8f85211a2a98e6a0dcd94187",
".dart_tool/package_config.json": "941fab13281f31f3718fea1ad7cdda2a",
".dart_tool/package_config_subset": "3dfeaebdb9ea842d7a1f9ef5d027b3e9",
".dart_tool/version": "2ff129be019bc5a446eee07075653fcd",
".git/COMMIT_EDITMSG": "581035b16e4ff0111739dc1a27203d45",
".git/config": "1bcebc287f984899261ec6a81fced3cf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "69dd4904d2f4611a87b30887829312e4",
".git/HEAD": "9b9ce058c0886ccb23cbdb1c8e6c1962",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2adb9b420d667b35bf9201bacb1ea897",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6365395a8d509a330f7aa52ebb4d47ad",
".git/logs/refs/heads/gitbranch": "daf0754267972d64b0c677fb77863291",
".git/logs/refs/heads/github_page": "c7ca3d8e4620de3aaaf98c816f334457",
".git/logs/refs/heads/gitpage": "6bb7ec74738e18a821355eb9fb77f921",
".git/logs/refs/heads/main": "8b813fdded82d5ecf87ee9cf8146d684",
".git/logs/refs/heads/master": "e02391c15e986a1b49c9f032c924cdbf",
".git/logs/refs/remotes/origin/gitbranch": "30fe5eabd359aecb726ffda371f9e5eb",
".git/logs/refs/remotes/origin/githost": "a8ced839e0e07a051b2259098388affc",
".git/logs/refs/remotes/origin/github_page": "e656367d73c6097ed22abe8259304084",
".git/logs/refs/remotes/origin/gitpage": "19f980ffff75ab24378a6987da20911c",
".git/logs/refs/remotes/origin/main": "00ba84358d9ce0d58dcc761a00b6cbc3",
".git/objects/01/69ccda700bb723050ba935277661fc7a554e31": "9331482d99dccd39b8d2e518cf3b590c",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/0b/4346bfda678b093559b2e4ee4ae68b92a605ff": "e686adf50543e82f8e56d3d30faea812",
".git/objects/10/9c5be96c7e299b3372a9b18fc7f075d96c49c6": "159c56376733347012562120a7a2cad0",
".git/objects/11/80fe2df986dd80673553d09d64fc36d127a3d4": "cb8c4a680aa64d60188105a38c13a5e8",
".git/objects/15/e93d51a6d66730c083a0084fe994612ae88bfd": "0b5ff1e00e3de0ec2dfdcc593400d5f9",
".git/objects/1a/be6bcc2a5c36d4d3244257e38fc9a1c0ebdefd": "8faae8cb8ee1cd65e883aeaef697323d",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/95eacd68881e29a9fe150c2d6dc2fe4fd8da9e": "22a435b7944da7cbf3cb24f24f89a44b",
".git/objects/21/c3fb69d18b37ee0ef289212081e7eb78ff51d1": "a710e69903611e58412c6bb4a5658a66",
".git/objects/24/7dc6efb75050203840e318bc68760c0ef3a0bd": "8b8ad4170f7881bf689c703afa9aecd0",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/e71a9895273f9b17cc1e219098edfacebae93b": "f0a5945e4507a91d848c9de2cc5d03b9",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2a/38375967763094d4013f1eea2449117b0ee26c": "ffb79c7fcffc480c47fb40888870bbe3",
".git/objects/36/4f45a2fc568b61cf5fd2323195b21bdc050f82": "5641aa317b066c20fa06c61863e7f9f5",
".git/objects/36/da86adda50c83ed1079d7b7ac7e8455a95cb5c": "14a3596ce326e5ac711f33149360df9d",
".git/objects/38/34ae8e87643c0b4477af9d67c2dd35a284301a": "f3bdebfbb036c283ced772eeb5ddac01",
".git/objects/38/f5b30902f0b00cfd304e12b04d33d5e6c28a09": "18fa4d61086f729ab4b928e326fea2f6",
".git/objects/3c/07d2d831e9854b7235846b7621e4898e980d3a": "38a1a83fc537addd38498f8b35f94358",
".git/objects/44/2362a84528ce9adfcfb6eb84356639ebe56476": "a7a82804e40a0baf579627f11eae5357",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/5fe0050ae5759fec4aab071f36f74a2fe22d91": "b33da96b175832baa78a8f896beb6da6",
".git/objects/49/8563e9a405e2a1f9f2924e0fce12d40b484ab3": "21a6a52c1f4d50d19f3148e6a675802b",
".git/objects/52/4ff9eb7ef1689c69bf0e84ce76d1f975b6d0db": "f6d80774a68ccb1cafc4ac8ab94c6307",
".git/objects/59/129340dc59187078b75347c5c7b1ec718ddc89": "6ac680afd21d5b07ec0c25f6ab9be947",
".git/objects/5e/882095620dbb3c35584dc0f11aff97620c3525": "a5ea40e5870468694908696b0751bdbf",
".git/objects/62/c92b9778671abaa86d78c11e5aad6bda6f6381": "dde4f7ad3f3db3fd13c261c7cc024dae",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/68/04054aad5154bb79c55c30b7af7dd89f18cf02": "bffc41629978fbee460d2a0059dd3e55",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/e106cf02d0a8c9952ffdace8b405fac0034af1": "113eba6ea0f6b5defcc89f9328871ece",
".git/objects/76/a181174f04302945fab49c58a179c3cea1c575": "7e041b8e6246cd347d58bc235f42ead0",
".git/objects/76/b5df08852d5e53e37b15cab36de8e9b5ea7a15": "646fe50c87b0e85d7a931594da0aa6fa",
".git/objects/7b/4dbde814466f85beb8b6cc50d6778431499d7b": "c5d3bd7285f7fdd71a9a6bc61898341c",
".git/objects/82/5f79681c9bf23c2e527eb314dd52915d057e9f": "5942c15ef2855ec00146f992c2400714",
".git/objects/82/6cd6dd5b7428016a92e6383ffd6f52d28986fa": "3c0df74ca9cdd3e5516152262dd20a3d",
".git/objects/84/a3661da0b48482ad74dd7ebd1335849c6f3b46": "e1c1723e6799e774e334dbcc98d01819",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/7c8c7cccd25809ef3d3b715fdf2b43dcee6e14": "bfb9de7e862f6556cb1ad8e69de148de",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8e/6134c1c7f46b044e6cee44cd7d91c80aa3a18a": "ac50410808c8011c2faa506d3a6801d7",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/3a9201ea6e8086e3b51106c80d99b2e4eb9df6": "ca1cfef5bed57386793ed1e183527972",
".git/objects/93/a4d1af00607385d2f471845fe09da06e448e0a": "c69bcb4f9baf4a17b8019f5bd9fa06b3",
".git/objects/94/6052c4949dbfd1515b26e44186c4503dc8cc46": "e59f13693887c387aa3ddbc9d58128ab",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9a/35fd7391d53be4bb847bc87f9e23fcd4ece674": "4439f5ded1854b651b485f6cefcb9953",
".git/objects/9b/254d020d7630482975d0b791ca3d640b0de031": "259faf4f03c0163b0bca9a4a39dbd168",
".git/objects/9c/ecfca90c99e69b908411d664aaa45a42336a97": "60fd7a3fd12e61470f6a130b75e32cb6",
".git/objects/a2/0df75a2491a5b7c17aae584123e5d515ec6678": "31aa1a119a0009e1928c6fb3339e2692",
".git/objects/a5/4619c07c0d130edf1753d774c816c004d12e3c": "a24c6ea5002d05cbde36a965fd7610b8",
".git/objects/aa/5eb1ba6e331e8b2be3ee9c119d5145be4c986a": "435fcf072c0c57ce076b12e9908a362b",
".git/objects/ac/2af04612902f3ee37803f88bf21e6d3b6ca68e": "750d20aadcac144b0a708fbb922ec10b",
".git/objects/ac/756b07ac549e596ed7bf73af0eea45d5a73c3a": "e760d68800deeccfaed933fa22f332fe",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b7/3ac477cca8a0de1752d99c943eb157e1bea183": "64f330b7f9dad502669b2746b7d9a85b",
".git/objects/b7/47e8b94204c3062908221b62fa81e93a25dd83": "0129d97b3e6420549a25e0743596f874",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/320dd8a91071062d49e92cb3dc90fb38ab08d0": "433afe594678536e3c5e6454610e39c3",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c5/da4aeee1633d399b021cf2f94d9c1ab5a7b132": "582c10ed50ef8192e6cbc249a553c95d",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/04448f06ceeae757c2988efa50652231c40a59": "bc908059e445d954326fc8f4796e4e5f",
".git/objects/e1/5e277aac877c786d4997a5bf3700497368b0c1": "d818e86a6edeb9c3af7918ae5a046bec",
".git/objects/e5/84a886d2c5e0a8a70bd4d90e53e95e8862e2f2": "e23c9b072a1d3ccd4719aed0b6840e5b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/bce020ac37fb00a7fdb962a47bd676a60701a1": "c315a520fb818eeff4630566e12d3def",
".git/objects/f8/6cd25ccd54bc6e15a989ceac9c6c3d6a441816": "67bf847d86762f86c2962660d2b333ff",
".git/objects/f8/9116cc63f649a43373747589cddb1e33bf9399": "b46278f1959b742fb7502911374d1bd8",
".git/objects/f9/55409881736a928c87585ff3d487edb2975593": "20b95d08665f488e60a38f9ddbcd170f",
".git/objects/pack/pack-8c86661613716ee6725014f05a742b36ac39dc73.idx": "3801ac56cb5b50c6d1f2cd9a3b531941",
".git/objects/pack/pack-8c86661613716ee6725014f05a742b36ac39dc73.pack": "cb83731a884ceb6ef066d700f8fd12e6",
".git/objects/pack/pack-8c86661613716ee6725014f05a742b36ac39dc73.rev": "09c640f7b62713adfeb45ac5888abe7c",
".git/ORIG_HEAD": "2f2ced42a085812993b12a156aa062d5",
".git/refs/heads/gitbranch": "9dfa4a3a3ef31b6e3cde74fd08accd81",
".git/refs/heads/github_page": "2f2ced42a085812993b12a156aa062d5",
".git/refs/heads/gitpage": "2f2ced42a085812993b12a156aa062d5",
".git/refs/heads/main": "c177370cfd04cc0ec3386de764a691be",
".git/refs/heads/master": "fe05b8201c9b5d92fadf03aa9bbe862a",
".git/refs/remotes/origin/gitbranch": "9dfa4a3a3ef31b6e3cde74fd08accd81",
".git/refs/remotes/origin/githost": "2f2ced42a085812993b12a156aa062d5",
".git/refs/remotes/origin/github_page": "2f2ced42a085812993b12a156aa062d5",
".git/refs/remotes/origin/gitpage": "2f2ced42a085812993b12a156aa062d5",
".git/refs/remotes/origin/main": "7af91a043047cb36da0c3b52f65d9300",
".vscode/settings.json": "46d4f143f2efdabca6e51b9e74c617ea",
"analysis_options.yaml": "9e65f4b9beebb674c0dc252f70a5c177",
"android/app/build.gradle": "cd4eae6120d0a4d56d6b523dd20567f1",
"android/app/src/debug/AndroidManifest.xml": "820c45a25b424dd5b7388330f7548d1f",
"android/app/src/main/AndroidManifest.xml": "54804ae875df991172785b2f57b754a7",
"android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java": "5b3b418ce50367c33bded3c0df06d47f",
"android/app/src/main/kotlin/com/example/move_square/MainActivity.kt": "3f884da3056605639ba7a86e354c6ae0",
"android/app/src/main/res/drawable/launch_background.xml": "12c379b886cbd7e72cfee6060a0947d4",
"android/app/src/main/res/drawable-v21/launch_background.xml": "bff4b9cd8e98754261159601bd94abd3",
"android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"android/app/src/main/res/values/styles.xml": "f8b8cfbf977690d117f4dade5d27a789",
"android/app/src/main/res/values-night/styles.xml": "c22fb29c307f2a6ae4317b3a5e577688",
"android/app/src/profile/AndroidManifest.xml": "820c45a25b424dd5b7388330f7548d1f",
"android/build.gradle": "df058a90e5cd11493c2ea557f598e5a4",
"android/gradle/wrapper/gradle-wrapper.properties": "f8be866fbb3300929bca97dce5ce7759",
"android/gradle.properties": "28e835ab42cf53277edaa9d08ba87c7d",
"android/local.properties": "95c716c0f8c98ae9102d3cd51c89d90f",
"android/settings.gradle": "d5a9ee71df121905698d5054a1f2e075",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b731ac3b721448737e74563940ebcb7d",
"assets/NOTICES": "8348f2f11e2783c9702845c2f435f011",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"build/41e868b347353adeceb62afc6f33757b/gen_dart_plugin_registrant.stamp": "436d2f2faeb7041740ee3f49a985d62a",
"build/41e868b347353adeceb62afc6f33757b/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
"build/41e868b347353adeceb62afc6f33757b/_composite.stamp": "436d2f2faeb7041740ee3f49a985d62a",
"build/cache.dill.track.dill": "0bdec3acaee90e9b02bb2389038c44ba",
"build/flutter_assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"build/flutter_assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"build/flutter_assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"build/flutter_assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"build/flutter_assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"build/flutter_assets/NOTICES": "8348f2f11e2783c9702845c2f435f011",
"build/flutter_assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"build/flutter_assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"build/web/canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"build/web/canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"build/web/canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"build/web/canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"build/web/canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"build/web/canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"build/web/canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"build/web/canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"build/web/canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"build/web/canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"build/web/flutter.js": "4b2350e14c6650ba82871f60906437ea",
"build/web/flutter_bootstrap.js": "831bde368522cde344dc9b55b4a384b0",
"build/web/index.html": "115b8ce66787b93ac308ab2227e89cd5",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "795ac2bad5ed37b00e09190ab4846aa9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9bd2a5db5fca8318800f294a2b407ced",
"/": "9bd2a5db5fca8318800f294a2b407ced",
"ios/Flutter/AppFrameworkInfo.plist": "09ece6f06f706864eb9c343ad93b57c8",
"ios/Flutter/Debug.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"ios/Flutter/flutter_export_environment.sh": "23a35f7e6f42f5554056c464ec997baa",
"ios/Flutter/Generated.xcconfig": "82effc426dd06fa46a05363e05378fbe",
"ios/Flutter/Release.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"ios/Runner/AppDelegate.swift": "e277c49e98c9f80e9e71c0524a5cb60f",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "31a08e429403e265cabfb31b3d65f049",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "a2f8558fb1d42514111fbbb19fb67314",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "2247a840b6ee72b8a069208af170e5b1",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "1b3b1538136316263c7092951e923e9d",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "be8887071dd7ec39cb754d236aa9584f",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "043119ef4faa026ff82bd03f241e5338",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "2b1452c4c1bda6177b4fbbb832df217f",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "2247a840b6ee72b8a069208af170e5b1",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "8245359312aea1b0d2412f79a07b0ca5",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "e419d22a37bc40ba185aca1acb6d4ac6",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "36c0d7a7132bdde18898ffdfcfcdc4d2",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "643842917530acf4c5159ae851b0baf2",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "665cb5e3c5729da6d639d26eff47a503",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "b9e927ac17345f2d5f052fe68a3487f9",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "f7ee1b402881509d197f34963e569927",
"ios/Runner/Base.lproj/LaunchScreen.storyboard": "b428258a72232cdd2cc04136ec23e656",
"ios/Runner/Base.lproj/Main.storyboard": "2b4e6b099f6729340a5ecc272c06cff7",
"ios/Runner/GeneratedPluginRegistrant.h": "decb9041b5e91a07e66f4664e5dac408",
"ios/Runner/GeneratedPluginRegistrant.m": "f6079b630997f8fd4ae1ac639162419a",
"ios/Runner/Info.plist": "d0e6a79736d6edea8385ab03c99118a9",
"ios/Runner/Runner-Bridging-Header.h": "7ad7b5cea096132de13ba526b2b9efbe",
"ios/Runner.xcodeproj/project.pbxproj": "0db8e9129e11beb70bdccdd345983028",
"ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "77d69f353bbf342ad71a24f69ec331ff",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "1eb71d2100e7a36f63a33aa15dbfe6f1",
"ios/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"ios/RunnerTests/RunnerTests.swift": "24e5d095048eb86c30423f4e04b6e57b",
"lib/main.dart": "67fe60690321d49160c856f1a85b8cf6",
"lib/screens/homepage.dart": "01d331659b384a2e3e9fe4e68aa0efc5",
"lib/widgets/buttons.dart": "299cddcba17382b0500c11f1302bc4fa",
"lib/widgets/square_box.dart": "a1fd89013977a3c83a54a3e8763dc330",
"linux/CMakeLists.txt": "c8844b3f65f93b882d73f11b7e79b0ac",
"linux/flutter/CMakeLists.txt": "2195470ce31675d31db5a37590d011f6",
"linux/flutter/generated_plugins.cmake": "e973b0a9c4bf1b7cba923da57b4fbf45",
"linux/flutter/generated_plugin_registrant.cc": "d07afe003d5837167bdd357d593f20a0",
"linux/flutter/generated_plugin_registrant.h": "d295462c9da9f7fef22dc86c34492318",
"linux/runner/CMakeLists.txt": "30cc1614b16214b66c014af09ba699eb",
"linux/runner/main.cc": "539395bcd63dba20afed0838d136189f",
"linux/runner/my_application.cc": "a0202580658a06aa57a9b509623edf7b",
"linux/runner/my_application.h": "f6b37d58752c8671078b6f660e33e8c1",
"macos/Flutter/ephemeral/Flutter-Generated.xcconfig": "6ac6b2c9812763d11dd57af06a10637a",
"macos/Flutter/ephemeral/flutter_export_environment.sh": "ffdbcc585879d3f70617c4beac99507d",
"macos/Flutter/Flutter-Debug.xcconfig": "f6991d7432e1664af118cc9531127016",
"macos/Flutter/Flutter-Release.xcconfig": "f6991d7432e1664af118cc9531127016",
"macos/Flutter/GeneratedPluginRegistrant.swift": "c840bc53b61279c2fb631741134c2ed7",
"macos/Runner/AppDelegate.swift": "4b52e0b89ebfef9baf45b04548c463d6",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_1024.png": "c9becc9105f8cabce934d20c7bfb6aac",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_128.png": "3ded30823804caaa5ccc944067c54a36",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_16.png": "8bf511604bc6ed0a6aeb380c5113fdcf",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_256.png": "dfe2c93d1536ae02f085cc63faa3430e",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_32.png": "8e0ae58e362a6636bdfccbc04da2c58c",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_512.png": "0ad44039155424738917502c69667699",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_64.png": "04e7b6ef05346c70b663ca1d97de3ad5",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "1d48e925145d4b573a3b5d7960a1c585",
"macos/Runner/Base.lproj/MainMenu.xib": "85bdf02ea39336686f2e0ff5f52137cc",
"macos/Runner/Configs/AppInfo.xcconfig": "f755f9f51cbc2cebf3aca91d126d0106",
"macos/Runner/Configs/Debug.xcconfig": "783e2b0e2aa72d8bc215462bb8d1569d",
"macos/Runner/Configs/Release.xcconfig": "709485d8ea7b78479bf23eb64281287d",
"macos/Runner/Configs/Warnings.xcconfig": "bbde97fb62099b5b9879fb2ffeb1a0a0",
"macos/Runner/DebugProfile.entitlements": "4ad77e84621dc5735c16180a0934fcde",
"macos/Runner/Info.plist": "9ffcbec0a18fdad9d3d606656fd46f9a",
"macos/Runner/MainFlutterWindow.swift": "93c22dae2d93f3dc1402e121901f582b",
"macos/Runner/Release.entitlements": "fc4ad575c1efec3d097fb9d40a0f702f",
"macos/Runner.xcodeproj/project.pbxproj": "3aaab62c9f8e5ee196c9c6948dd5c1e4",
"macos/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"macos/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "821ce1491dda5c75246e36da68a38175",
"macos/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"macos/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"macos/RunnerTests/RunnerTests.swift": "8059f5d27a19c556eeafb49b3f9b7bdd",
"main.dart.js": "d625636cb01971b7ba41db536051f7d2",
"manifest.json": "0d5bb22b83e6f3091f81c3285650c5a4",
"pubspec.lock": "e343a356ab3a816b1cbae25a2ac04c9e",
"pubspec.yaml": "cd3ee25cdf28fad100d25ce30d642c37",
"README.md": "e7634786c809ea4a09850e25e52caf78",
"test/widget_test.dart": "97aa94ade196d7c5081224051c7cf081",
"version.json": "36de82dc9e8aca7acad2a849d8b98891",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/index.html": "61adf705ce2d69d34d43e8805cce397b",
"web/manifest.json": "0d5bb22b83e6f3091f81c3285650c5a4",
"windows/CMakeLists.txt": "b63a7caae54872650c8d33aa8f5eaea8",
"windows/flutter/CMakeLists.txt": "bbf66fed5180bd9ae8198b8d7c4a0001",
"windows/flutter/generated_plugins.cmake": "620906318e8c8297f3bc95b445ce4c47",
"windows/flutter/generated_plugin_registrant.cc": "a8f91348d8d9090f22ec69d597c41e1f",
"windows/flutter/generated_plugin_registrant.h": "0ea33875f9f8e118f9c2ded03e2e2835",
"windows/runner/CMakeLists.txt": "028602ab9754bffe716659ada7590d29",
"windows/runner/flutter_window.cpp": "2f463f9b7da67a2d692a012f9ea85e0c",
"windows/runner/flutter_window.h": "7defcc89d4a26d56e801241d624d48fb",
"windows/runner/main.cpp": "cf0ccb359a0b10199d0490185e192e73",
"windows/runner/resource.h": "1ade5dd15e613479a15e8832ed276f2b",
"windows/runner/resources/app_icon.ico": "6ea04d80ca2a3fa92c7717c3c44ccc19",
"windows/runner/runner.exe.manifest": "298a0260a755c3959d2c3c8904298803",
"windows/runner/Runner.rc": "4b091ec5fcf840dfeb9da5fe1de21f90",
"windows/runner/utils.cpp": "432461b09d862a2f8dadf380ff0e34e5",
"windows/runner/utils.h": "fd81e143f5614eb6fd75efe539002853",
"windows/runner/win32_window.cpp": "571eb8234dbc2661be03aa5f2a4d2fca",
"windows/runner/win32_window.h": "7569387d58711ab975940f4df3b4bcda"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
