function showBlp(){
var catExcludeList = [{catId:"cat7180011",validate:"true",id:"cat-0001", action:'showPLP'},
                 {catId:"catst11034202",validate:"true",id:"cat-0002", action:'showPLP'},
                 {catId:"cat6910000",validate:"true",id:"cat-0003", action:'showPLP'},
                 {catId:"cat6600048",validate:"true",id:"cat-0004", action:'showPLP'},
                 {catId:"cat7230028",validate:"true",id:"cat-0005", action:'showPLP'},
                 {catId:"cat7530016",validate:"true",id:"cat-0006", action:'showPLP'},
                 {catId:"catst12274633",validate:"true",id:"cat-0007", action:'showPLP'}];
    var subnav;
    var catElements = (document.getElementById("target0")) ? document.getElementById("target0").children[0].children[0].children : '';
    if(catElements){
    var nav = document.getElementsByClassName('card nav-item');
    for (var i = 0; i < nav.length; i++) {
      subnav = nav[i].children[1].children[0];
      var arrSubnav = Array.from(subnav.children[0].children);
      for (var p = 0; p < arrSubnav.length; p++) {
            var arrSubnavChild = Array.from(arrSubnav[p].children);
              var catRefTitle = arrSubnavChild[0].getAttribute('href').substring(arrSubnavChild[0].getAttribute("href").lastIndexOf("/") + 1).split("?showPLP")[0];
              var catGetAttribute = arrSubnavChild[0].getAttribute('href');
              var catRefArray= arrSubnavChild[0];
              for (var o = 0; o < catExcludeList.length; o++) {
                  var catExcludeId = catExcludeList[o].catId;
                  if(catExcludeId != catRefTitle){
                      var catRef = catRefArray.getAttribute("href").split("?showPLP")[0]+"?showPLP";
                      catRefArray.setAttribute("href",catRef);
                }
              }
           }
        }
    }

}
function myOnloadFunction(pageName,path) {
        showBlp();
        switch(pageName){

            case '/tienda/home':
                dataLayer.push({
                'event': 'impresionCampaign',
                'ecommerce': {
                    'promoView': {
                        'promotions': [// Array of promoFieldObjects.

         {
		'id':'linea_blanca_191119',
		'name':'Línea Blanca hasta 44% de desc',
		'creative':'h_banner_central',
		'position':'1'
        },
		{
		'id':'top_deals_191119',
		'name':'TOP deals ofertas del día',
		'creative':'h_banner_secun',
		'position':'2'
		},
		{
		'id':'zapatos_191119',
       'name':'Zapatos hasta 20% de desc',
       'creative':'h_banner_secun',
       'position':'3'
		},
							{
		 'id':'regalo_perfecto_191119',
		'name':'El Regalo Perfecto',
       'creative':'h_banner_secun',
       'position':'4'
		},
							{
		'id':'deportes_191119',
		'name':'Deportes hasta 20% de desc',
       'creative':'h_banner_secun',
       'position':'5'
		},
							{
		'id':'Ella_191119',
		'name':'Ella hasta 20% de desc',
       'creative':'h_banner_secun',
       'position':'6'
		},
							{
		'id':'bebes_niños_191119',
		'name':'Bebés y Niños hasta 20% de desc',
       'creative':'h_banner_secun',
       'position':'7'
		},
												{
		'id':'el_191119',
		'name':'Él hasta 20% de desc',
       'creative':'h_banner_secun',
       'position':'8'
		},
							{
		'id':'pantallas_191119',
		'name':'Pantallas hasta 25% de desc',
       'creative':'h_banner_secun',
       'position':'9'
		},									{
		'id':'celulares_191119',
		'name':'Celulares hasta 13 meses sin intereses',
       'creative':'h_banner_secun',
       'position':'10'
		},
							{
		'id':'juguetes_191119',
		'name':'Juguetes hasta 20% de desc',
       'creative':'h_banner_secun',
       'position':'11'
		},			
							{
		'id':'videojuegos_191119',
		'name':'Videojuegos hasta 10% de desc',
       'creative':'h_banner_secun',
       'position':'12'
		},									{
		'id':'muebles_191119',
		'name':'Muebles hasta 20% de desc',
       'creative':'h_banner_secun',
       'position':'13'
		},
							{
		'id':'navidad_191119',
		'name':'Navidad hasta 40% de desc',
       'creative':'h_banner_secun',
       'position':'14'
		}
     
                        ]
                    }
                }
            });
            
            
 /*AQUÍ INICIA LANDING*/    
 
 
  /*PRIMER NIVEL EL*/ 
       
            break;
            case '/tienda/él/cat5020003':


dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
'id': 'bts_main_180619',
'name': 'Back to School Liverpool',
'creative': 'blp_el_bts_main',
'position': '01'
},
{
'id': 'acapella_300719',
'name': 'Acapella Él',
'creative': 'blp_el_acapella',
'position': '02'
},
{
'id': 'aeropostale_130819',
'name': 'Aeropostale',
'creative': 'blp_el_aeropostale',
'position': '03'
},
{
'id': 'american_eagle_300719',
'name': 'American Eagle',
'creative': 'blp_el_american_eagle',
'position': '04'
},
{
'id': 'new_arrivals_130519',
'name': 'New Arrivals Él',
'creative': 'blp_el_New_Arrivals',
'position': '05'
},
{
'id': 'new_arrivals_1_130519',
'name': 'New Arrivals 1',
'creative': 'blp_el_New_Arrivals_1',
'position': '06'
},
{
'id': 'new_arrivals_2_130519',
'name': 'New Arrivals 2',
'creative': 'blp_el_New_Arrivals_2',
'position': '07'
},
{
'id': 'new_arrivals_3_130519',
'name': 'New Arrivals 3',
'creative': 'blp_el_New_Arrivals_3',
'position': '08'
},
{
'id': 'new_arrivals_4_130519',
'name': 'New Arrivals 4',
'creative': 'blp_el_New_Arrivals_4',
'position': '09'
},
{
'id': 'new_arrivals_5_130519',
'name': 'New Arrivals 5',
'creative': 'blp_el_New_Arrivals_5',
'position': '10'
},
{
'id': 'new_arrivals_6_130519',
'name': 'New Arrivals 6',
'creative': 'blp_el_New_Arrivals_6',
'position': '11'
},
{
'id': 'boss_hugo_130519',
'name': 'Boss Hugo',
'creative': 'blp_el_boss',
'position': '12'
},
{
'id': 'camisas_casuales_130519',
'name': 'Camisas Casuales',
'creative': 'blp_el_street_playeras',
'position': '13'
},
{
'id': 'street_sueter_130519',
'name': 'Street Mochilas',
'creative': 'blp_el_street_mochilas',
'position': '14'
},
{
'id': 'chamarras_130519',
'name': 'Chamarras',
'creative': 'blp_el_chamarras',
'position': '15'
},
{
'id': 'marcas_el_hugo_130519',
'name': 'Marcas Hugo',
'creative': 'blp_el_marcas_hugo',
'position': '16'
},
{
'id': 'marcas_el_banana_130519',
'name': 'Marcas Banana',
'creative': 'blp_el_marcas_banana',
'position': '17'
},
{
'id': 'marcas_el_american_130519',
'name': 'Marcas American',
'creative': 'blp_el_marcas_american',
'position': '18'
},
{
'id': 'marcas_el_jcrew_130519',
'name': 'Marcas JCrew',
'creative': 'blp_el_marcas_jcrew',
'position': '19'
},
{
'id': 'marcas_el_psycho_130519',
'name': 'Marcas Psycho',
'creative': 'blp_el_marcas_psycho',
'position': '20'
},
{
'id': 'marcas_el_gap_130519',
'name': 'Marcas Gap',
'creative': 'blp_el_marcas_gap',
'position': '21'
},
{
'id': 'marcas_el_ben_130519',
'name': 'Marcas Ben',
'creative': 'blp_el_marcas_ben',
'position': '22'
},
{
'id': 'marcas_el_ralph_130519',
'name': 'Marcas Ralph',
'creative': 'blp_el_marcas_ralph',
'position': '23'
}
]
}
}
});


 /*PRIMER NIVEL BELLEZA*/ 

            break;
            case '/tienda/belleza/cat5020010':
 dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
'id': 'regalo_main_040619',
'name': 'Regalo Compra',
'creative': 'blp_belleza_regalo',
'position': '01'
},
{
'id': 'palettes_300719',
'name': 'Palettes Belleza',
'creative': 'blp_belleza_palettes',
'position': '02'
},
{
'id': 'mac_love_120819',
'name': 'Mac Love',
'creative': 'blp_belleza_mac_love',
'position': '03'
},
{
'id': 'hair_care_040619',
'name': 'Hair Care',
'creative': 'blp_belleza_hair_care',
'position': '04'
},
{
'id': 'make_up_040619',
'name': 'Make Up',
'creative': 'blp_belleza_make_up',
'position': '05'
},
{
'id': 'perfumes_040619',
'name': 'Perfumes',
'creative': 'blp_belleza_perfumes',
'position': '06'
},
{
'id': 'skin_care_040619',
'name': 'Skin Care',
'creative': 'blp_belleza_skin_care',
'position': '07'
},
{
'id': 'hombres_040619',
'name': 'Hombres Belleza',
'creative': 'blp_belleza_hombres',
'position': '08'
},
{
'id': 'pickbox_040619',
'name': 'Pickbox Belleza',
'creative': 'blp_belleza_pickbox',
'position': '09'
},
{
'id': 'crema_ojos_040619',
'name': 'Crema ojos',
'creative': 'blp_belleza_crema_ojos',
'position': '10'
},
{
'id': 'mascarillas_040619',
'name': 'Mascarillas',
'creative': 'blp_belleza_mascarillas',
'position': '11'
},
{
'id': 'corporales_040619',
'name': 'Corporales',
'creative': 'blp_belleza_corporales',
'position': '12'
},
{
'id': 'faciales_040619',
'name': 'Faciales',
'creative': 'blp_belleza_faciales',
'position': '13'
},
{
'id': 'ladeco_120819',
'name': 'Ladeco Video',
'creative': 'blp_belleza_ladeco',
'position': '14'
},
{
'id': 'anastasia_040619',
'name': 'Anastasia',
'creative': 'blp_belleza_anastasia',
'position': '15'
},
{
'id': 'dior_040619',
'name': 'Dior',
'creative': 'blp_belleza_dior',
'position': '16'
},
{
'id': 'estee_040619',
'name': 'Estee',
'creative': 'blp_belleza_estee',
'position': '17'
},
{
'id': 'giorgio_040619',
'name': 'Giorgio',
'creative': 'blp_belleza_giorgio',
'position': '18'
},
{
'id': 'guerlain_040619',
'name': 'Guerlain',
'creative': 'blp_belleza_guerlain',
'position': '19'
},
{
'id': 'givenchy_040619',
'name': 'Givenchy',
'creative': 'blp_belleza_givenchy',
'position': '20'
},
{
'id': 'kiehls_040619',
'name': 'Kiehls',
'creative': 'blp_belleza_kiehls',
'position': '21'
},
{
'id': 'lancome_040619',
'name': 'Lancome',
'creative': 'blp_belleza_lancome',
'position': '22'
},
{
'id': 'mac_040619',
'name': 'Mac',
'creative': 'blp_belleza_mac',
'position': '23'
},
{
'id': 'urban_decay_040619',
'name': 'Urban Decay',
'creative': 'blp_belleza_urban_decay',
'position': '24'
},
{
'id': 'bx_040619',
'name': 'BX',
'creative': 'blp_belleza_bx',
'position': '25'
}
]
}
}
});

/*PRIMER NIVEL DEPORTES*/ 

            break;
            case '/tienda/deportes/cat480332':
 dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'running_fest_200919',
    'name': 'Running Fest',
    'creative': 'blp_deportes_running_fest',
    'position': '01'
},
{
    'id': 'americano_280819',
    'name': 'Americano',
    'creative': 'blp_deportes_americano',
    'position': '02'
},
{
    'id': 'running_280819',
    'name': 'Running',
    'creative': 'blp_deportes_running',
    'position': '03'
},
{
    'id': 'entrenamiento_280819',
    'name': 'Entrenamiento',
    'creative': 'blp_deportes_entrenamiento',
    'position': '04'
},
{
    'id': 'ella_280819',
    'name': 'Ella',
    'creative': 'blp_deportes_ella',
    'position': '05'
},
{
    'id': 'futbol_280819',
    'name': 'Futbol',
    'creative': 'blp_deportes_futbol',
    'position': '06'
},
{
    'id': 'basquetbol_280819',
    'name': 'Basquetbol',
    'creative': 'blp_deportes_basquetbol',
    'position': '07'
},
{
    'id': 'tenisel_280819',
    'name': 'Tenis El',
    'creative': 'blp_deportes_tenisel',
    'position': '08'
},
{
    'id': 'tenisella_280819',
    'name': 'Tenis Ella',
    'creative': 'blp_deportes_tenisella',
    'position': '09'
},
{
    'id': 'ninas_280819',
    'name': 'Ninas',
    'creative': 'blp_deportes_ninas',
    'position': '10'
},
{
    'id': 'ninos_280819',
    'name': 'Ninos',
    'creative': 'blp_deportes_ninos',
    'position': '11'
},
{
    'id': 'motos_280819',
    'name': 'Motos',
    'creative': 'blp_deportes_motos',
    'position': '12'
}
]
}
}
});


/*PRIMER NIVEL LINEA BLANCA*/ 

            break;
            case '/tienda/línea-blanca/cat610025':
 dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'conectividad_210619',
    'name': 'Conectividad Hogar',
    'creative': 'blp_lineablanca_conectividad',
    'position': '01'
},
{
    'id': 'lavadosecado_210619',
    'name': 'Lavado y secado',
    'creative': 'blp_lineablanca_lavado',
    'position': '02'
},
{
    'id': 'cocinas_210619',
    'name': 'Cocinas',
    'creative': 'blp_lineablanca_cocinas',
    'position': '03'
},
{
    'id': 'refrigeradores_210619',
    'name': 'Refrigeradores',
    'creative': 'blp_lineablanca_refrigeradores',
    'position': '04'
},
{
    'id': 'parrillas_210619',
    'name': 'Parrillas',
    'creative': 'blp_lineablanca_parrillas',
    'position': '05'
},
{
    'id': 'cafe_210619',
    'name': 'Café',
    'creative': 'blp_lineablanca_cafe',
    'position': '06'
},
{
    'id': 'aireacondicionado_210619',
    'name': 'Aire Acondicionado',
    'creative': 'blp_lineablanca_aire',
    'position': '07'
},
{
    'id': 'estufas_210619',
    'name': 'Estufas',
    'creative': 'blp_lineablanca_estufas',
    'position': '08'
}
]
}
}
});


/*PRIMER NIVEL VINOS*/ 

            break;
            case '/tienda/vinos-y-gourmet/cat4370401':
dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'seleccion_210619',
    'name': 'Selección',
    'creative': 'blp_vinos_seleccion',
    'position': '01'
},
{
    'id': 'rosado_210619',
    'name': 'Vino Rosado',
    'creative': 'blp_vinos_rosado',
    'position': '02'
},
{
    'id': 'blanco_210619',
    'name': 'Vino Blanco',
    'creative': 'blp_vinos_blanco',
    'position': '03'
},
{
    'id': 'tinto_210619',
    'name': 'Vino Tinto',
    'creative': 'blp_vinos_tinto',
    'position': '04'
},
{
    'id': 'espumoso_210619',
    'name': 'Vino Espumoso',
    'creative': 'blp_vinos_espumoso',
    'position': '05'
},
{
    'id': 'champagne_210619',
    'name': 'Vino Champagne',
    'creative': 'blp_vinos_champagne',
    'position': '06'
},
{
    'id': 'buchanans_140819',
    'name': 'Buchanans Soul',
    'creative': 'blp_vinos_buchanans',
    'position': '07'
},
{
    'id': 'donjulio_140819',
    'name': 'Don Julio',
    'creative': 'blp_vinos_donjulio',
    'position': '08'
},
{
    'id': 'tequila_210619',
    'name': 'Vinos Tequila',
    'creative': 'blp_vinos_tequila',
    'position': '09'
},
{
    'id': 'ron_210619',
    'name': 'Vinos Ron',
    'creative': 'blp_vinos_ron',
    'position': '10'
},
{
    'id': 'whisky_210619',
    'name': 'Vinos Whisky',
    'creative': 'blp_vinos_whisky',
    'position': '11'
},
{
    'id': 'brandy_210619',
    'name': 'Vinos Brandy',
    'creative': 'blp_vinos_brandy',
    'position': '12'
},
{
    'id': 'licores_210619',
    'name': 'Vinos Licores',
    'creative': 'blp_vinos_licores',
    'position': '13'
},
{
    'id': 'vodka_210619',
    'name': 'Vinos vodka',
    'creative': 'blp_vinos_vodka',
    'position': '14'
},
{
    'id': 'copas_210619',
    'name': 'Vinos copas',
    'creative': 'blp_vinos_copas',
    'position': '15'
},
{
    'id': 'accesorios_210619',
    'name': 'Vinos accesorios',
    'creative': 'blp_vinos_accesorios',
    'position': '16'
},
{
    'id': 'cavas_210619',
    'name': 'Vinos cavas',
    'creative': 'blp_vinos_cavas',
    'position': '17'
},
{
    'id': 'hieleras_210619',
    'name': 'Vinos hieleras',
    'creative': 'blp_vinos_hieleras',
    'position': '18'
},
{
    'id': 'experiencia_210619',
    'name': 'Vinos experiencia',
    'creative': 'blp_vinos_experiencia',
    'position': '19'
},
{
    'id': 'curados_210619',
    'name': 'Vinos curados',
    'creative': 'blp_vinos_curados',
    'position': '20'
},
{
    'id': 'bebidas_210619',
    'name': 'Vinos bebidas',
    'creative': 'blp_vinos_bebidas',
    'position': '21'
},
{
    'id': 'aceite_210619',
    'name': 'Vinos aceiete',
    'creative': 'blp_vinos_aceite',
    'position': '22'
}
]
}
}
});



/*PRIMER NIVEL COCINA*/ 

            break;
            case '/tienda/cocina/cat480186':
            
dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'licuadoras_210619',
    'name': 'Licuadoras Cocina',
    'creative': 'blp_cocina_licuadoras',
    'position': '01'
},
{
    'id': 'microondas_210619',
    'name': 'Microondas Cocina',
    'creative': 'blp_cocina_microondas',
    'position': '02'
},
{
    'id': 'cafeteras_210619',
    'name': 'Cafeteras Cocina',
    'creative': 'blp_cocina_cafeteras',
    'position': '03'
},
{
    'id': 'batidoras_210619',
    'name': 'Cafeteras Cocina',
    'creative': 'blp_cocina_batidoras',
    'position': '04'
},
{
    'id': 'ollas_210619',
    'name': 'Ollas Cocina',
    'creative': 'blp_cocina_ollas',
    'position': '05'
},
{
    'id': 'frigobares_210619',
    'name': 'Frigobares Cocina',
    'creative': 'blp_cocina_frigobares',
    'position': '06'
},
{
    'id': 'baterias_210619',
    'name': 'Baterias Cocina',
    'creative': 'blp_cocina_baterias',
    'position': '07'
},
{
    'id': 'refrigeradores_210619',
    'name': 'Refrigeradores Cocina',
    'creative': 'blp_cocina_refrigeradores',
    'position': '08'
},
{
    'id': 'campanas_210619',
    'name': 'Campanas Cocina',
    'creative': 'blp_cocina_campanas',
    'position': '08'
},
{
    'id': 'estufas_210619',
    'name': 'Estufas Cocina',
    'creative': 'blp_cocina_estufas',
    'position': '09'
},
{
    'id': 'recetas_210619',
    'name': 'Recetas Cocina',
    'creative': 'blp_cocina_recetas',
    'position': '10'
}
]
}
}
});


/*PRIMER NIVEL MUEBLES*/ 

            break;
            case '/tienda/muebles/cat860739':
            
dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'salas_210619',
    'name': 'Salas',
    'creative': 'blp_muebles_salas',
    'position': '01'
},
{
    'id': 'iluminación_210619',
    'name': 'Iluminación',
    'creative': 'blp_muebles_iluminacion',
    'position': '02'
},
{
    'id': 'muebles_210619',
    'name': 'Muebles TV',
    'creative': 'blp_muebles_muebles',
    'position': '03'
},
{
    'id': 'colchones_210619',
    'name': 'Colchones',
    'creative': 'blp_muebles_colchones',
    'position': '04'
},
{
    'id': 'infantiles_210619',
    'name': 'Infantiles',
    'creative': 'blp_muebles_infantiles',
    'position': '05'
},
{
    'id': 'ropa_210619',
    'name': 'Ropa de cama',
    'creative': 'blp_muebles_ropa',
    'position': '06'
},
{
    'id': 'sillas_210619',
    'name': 'Sillas',
    'creative': 'blp_muebles_sillas',
    'position': '07'
},
{
    'id': 'cortinas_210619',
    'name': 'Cortinas',
    'creative': 'blp_muebles_cortinas',
    'position': '08'
},
{
    'id': 'portaretratos_210619',
    'name': 'Portaretratos',
    'creative': 'blp_muebles_portaretratos',
    'position': '09'
},
{
    'id': 'tapetes_210619',
    'name': 'Tapetes',
    'creative': 'blp_muebles_tapetes',
    'position': '08'
},
{
    'id': 'cuadros_210619',
    'name': 'Cuadros',
    'creative': 'blp_muebles_cuadros',
    'position': '09'
},
{
    'id': 'espejos_210619',
    'name': 'Espejos',
    'creative': 'blp_muebles_espejos',
    'position': '10'
},
{
    'id': 'jardin_210619',
    'name': 'Jardin',
    'creative': 'blp_muebles_jardin',
    'position': '11'
},
{
    'id': 'cdi_210619',
    'name': 'CDI',
    'creative': 'blp_muebles_cdi',
    'position': '12'
}
]
}
}
});





/*PRIMER NIVEL VIDEOJUEGOS*/ 

            break;
            case '/tienda/videojuegos/cat670055':
            
dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'gearsofwar_m_090819',
    'name': 'Gears of War',
    'creative': 'blp_videojuegos_gears_of_war',
    'position': '01'
},
{
    'id': 'nintendo_marca_090819',
    'name': 'Marca Nintendo',
    'creative': 'blp_videojuegos_marca_nintendo',
    'position': '02'
},
{
    'id': 'playstation_marca_090819',
    'name': 'Marca Playstation',
    'creative': 'blp_videojuegos_marca_playstation',
    'position': '03'
},
{
    'id': 'xbox_marca_090819',
    'name': 'Marca Xbox',
    'creative': 'blp_videojuegos_marca_xbox',
    'position': '04'
},
{
    'id': 'gears_of_war_030919',
    'name': 'Gears of War Escritorio',
    'creative': 'blp_videojuegos_gears_of_war_e',
    'position': '05'
},
{
    'id': 'consolas_090819',
    'name': 'Consolas',
    'creative': 'blp_videojuegos_consolas',
    'position': '06'
},
{
    'id': 'juegos_090819',
    'name': 'Juegos',
    'creative': 'blp_videojuegos_juegos',
    'position': '07'
},
{
    'id': 'accesorios_090819',
    'name': 'Accesorios',
    'creative': 'blp_videojuegos_accesorios',
    'position': '08'
},
{
    'id': 'greatest_hits_090819',
    'name': 'Greatest Hits',
    'creative': 'blp_videojuegos_greatest_hits',
    'position': '09'
},
{
    'id': 'fifa_030919',
    'name': 'Fifa 2020',
    'creative': 'blp_videojuegos_fifa',
    'position': '10'
},
{
    'id': 'PES_030919',
    'name': 'PES 2020',
    'creative': 'blp_videojuegos_pes',
    'position': '11'
},
{
    'id': 'switchlite_030919',
    'name': 'Switch Lite',
    'creative': 'blp_videojuegos_switchlite',
    'position': '12'
},
{
    'id': 'starwars_090819',
    'name': 'Star Wars',
    'creative': 'blp_videojuegos_starwars',
    'position': '13'
},
{
    'id': 'zelda_030919',
    'name': 'Switch Zelda',
    'creative': 'blp_videojuegos_zelda',
    'position': '14'
},
{
    'id': 'cod_090819',
    'name': 'Call of Duty',
    'creative': 'blp_videojuegos_cod',
    'position': '15'
},
{
    'id': 'aventura_090819',
    'name': 'Filtros Aventura',
    'creative': 'blp_videojuegos_aventura',
    'position': '16'
},
{
    'id': 'deportes_090819',
    'name': 'Filtros Deportes',
    'creative': 'blp_videojuegos_deportes',
    'position': '17'
},
{
    'id': 'disparos_090819',
    'name': 'Filtros Disparos',
    'creative': 'blp_videojuegos_disparos',
    'position': '18'
},
{
    'id': 'peleas_090819',
    'name': 'Filtros Peleas',
    'creative': 'blp_videojuegos_peleas',
    'position': '19'
},
{
    'id': 'terror_090819',
    'name': 'Filtros Terror',
    'creative': 'blp_videojuegos_terror',
    'position': '20'
},
{
    'id': 'carreras_090819',
    'name': 'Filtros Carreras',
    'creative': 'blp_videojuegos_carreras',
    'position': '21'
},
{
    'id': 'pcgamer_090819',
    'name': 'Pc Gamer',
    'creative': 'blp_videojuegos_pcgamer',
    'position': '15'
}
]
}
}
});




/*PRIMER NIVEL BEBÉS*/ 

            break;
            case '/tienda/bebés-y-niños/catst5620308':
            
dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'bebes_main_230719',
    'name': 'Back to school - Liverpool',
    'creative': 'blp_el_bebes_back_to_school',
    'position': '01'
},
{
    'id': 'bebes_main_230719',
    'name': 'Back to school - Liverpool',
    'creative': 'blp_el_bebes_back_to_school_nina',
    'position': '02'
},
{

    'id': 'bebes_main_230719',
    'name': 'Back to school - Liverpool',
    'creative': 'blp_el_bebes_back_to_school_nino',
    'position': '03'
                                                
},
{
    'id': 'bebes_main_230719',
    'name': 'Back to school - Liverpool',
    'creative': 'blp_el_bebes_back_to_school_principal',
    'position': '04'
},
{
    'id': 'bebes_main_230719',
    'name': 'Back to school - Liverpool',
    'creative': 'blp_el_bebes_back_to_school_zap_nina',
    'position': '05'
},
{
    'id': 'bebes_main_230719',
    'name': 'Back to school - Liverpool',
    'creative': 'blp_el_bebes_back_to_school_zap_nino',
    'position': '06'
},
{
    'id': 'bebes_main_230719',
    'name': 'Back to school - Liverpool',
    'creative': 'blp_el_bebes_back_to_school_accesorios',
    'position': '07'
},
{
   'id': 'bebes_main_230719',
   'name': 'Back to school - Liverpool',
   'creative': 'blp_el_bebes_back_to_school_fisher_nina',
   'position': '08'
},
{
    'id': 'bebes_main_230719',
    'name': 'Back to school - Liverpool',
    'creative': 'blp_el_bebes_back_to_school_fisher_nino',
    'position': '09'
},
{
   'id': 'bebes_main_230719',
   'name': 'Back to school - Liverpool',
   'creative': 'blp_el_bebes_back_to_school_carriolas',
   'position': '10'
},
{
    'id': 'bebes_main_230719',
    'name': 'Back to school - Liverpool',
    'creative': 'blp_el_bebes_back_to_school_cuna',
    'position': '11'
},
{
    'id': 'bebes_main_230719',
    'name': 'Back to school - Liverpool',
    'creative': 'blp_el_bebes_back_to_school_autoasientos',
    'position': '12'

}
]
}
}
});                
        
    /*PRIMER NIVEL BEBÉS QA*/ 

            break;
            case '/tienda/bebés/cat4120003':
            
dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'bebes_main_230719',
    'name': 'Back to school - Liverpool',
    'creative': 'blp_el_bebes_back_to_school',
    'position': '01'
},
{
    'id': 'bebes_main_230719',
    'name': 'Back to school - Liverpool',
    'creative': 'blp_el_bebes_back_to_school_nina',
    'position': '02'
},
{

    'id': 'bebes_main_230719',
    'name': 'Back to school - Liverpool',
    'creative': 'blp_el_bebes_back_to_school_nino',
    'position': '03'
                                                
},
{
    'id': 'bebes_main_230719',
    'name': 'Back to school - Liverpool',
    'creative': 'blp_el_bebes_back_to_school_principal',
    'position': '04'
},
{
    'id': 'bebes_main_230719',
    'name': 'Back to school - Liverpool',
    'creative': 'blp_el_bebes_back_to_school_zap_nina',
    'position': '05'
},
{
    'id': 'bebes_main_230719',
    'name': 'Back to school - Liverpool',
    'creative': 'blp_el_bebes_back_to_school_zap_nino',
    'position': '06'
},
{
    'id': 'bebes_main_230719',
    'name': 'Back to school - Liverpool',
    'creative': 'blp_el_bebes_back_to_school_accesorios',
    'position': '07'
},
{
   'id': 'bebes_main_230719',
   'name': 'Back to school - Liverpool',
   'creative': 'blp_el_bebes_back_to_school_fisher_nina',
   'position': '08'
},
{
    'id': 'bebes_main_230719',
    'name': 'Back to school - Liverpool',
    'creative': 'blp_el_bebes_back_to_school_fisher_nino',
    'position': '09'
},
{
   'id': 'bebes_main_230719',
   'name': 'Back to school - Liverpool',
   'creative': 'blp_el_bebes_back_to_school_carriolas',
   'position': '10'
},
{
    'id': 'bebes_main_230719',
    'name': 'Back to school - Liverpool',
    'creative': 'blp_el_bebes_back_to_school_cuna',
    'position': '11'
},
{
    'id': 'bebes_main_230719',
    'name': 'Back to school - Liverpool',
    'creative': 'blp_el_bebes_back_to_school_autoasientos',
    'position': '12'

}
]
}
}
});                
                
                
                
                
                
/*PRIMER NIVEL CASA*/ 

            break;
            case '/tienda/casa/catst8233783':
            
dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
   'id': 'casa_210619',
   'name': 'Casa',
   'creative': 'blp_Casa',
   'position': '01'
},
{
   'id': 'casa_sabanas_210619',
   'name': 'Casa Sabanas',
   'creative': 'blp_sabanas_Casa',
   'position': '02'
},
{

   'id': 'casa_colchas_210619',
   'name': 'Casa Colchas',
   'creative': 'blp_colchas_Casa',
   'position': '03'
                                                
},
{
   'id': 'casa_edredones_210619',
   'name': 'Casa Edredones',
   'creative': 'blp_edredones_Casa',
   'position': '04'
},
{
   'id': 'casa_vajillas_210619',
   'name': 'Casa Vajillas',
   'creative': 'blp_vajillas_Casa',
   'position': '05'
},
{
   'id': 'casa_mascotas_210619',
   'name': 'Casa Mascotas',
   'creative': 'blp_mascotas_Casa',
   'position': '06'
},
{
   'id': 'casa_organizador_210619',
   'name': 'Casa Organizador',
   'creative': 'blp_organizador_Casa',
   'position': '07'
},
{
   'id': 'casa_entretenimiento_210619',
   'name': 'Casa Entretenimiento',
   'creative': 'blp_entretenimiento_Casa',
   'position': '08'
},
{
   'id': 'casa_libros_210619',
   'name': 'Casa Libros',
   'creative': 'blp_libros_Casa',
   'position': '09'

}
]
}
}
});    
                
                
/*PRIMER NIVEL CELULARES*/ 

            break;
            case '/tienda/celulares/cat4450173':
            
dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
'id': 'celulares_motorola_200619',
'name': 'Celulares_Motorola',
'creative': 'blp_Celulares_Motorola',
'position': '01'
},
{
'id': 'celulares_accesorios_200619',
'name': 'Celulares_Accesorios',
'creative': 'blp_Celulares_Accesorios',
'position': '02'
},
{

'id': 'celulares_baterias_200619',
'name': 'Celulares_Baterías',
'creative': 'blp_Celulares_Baterias',
'position': '03'
                                                
},
{
'id': 'celulares_modelos_200619',
'name': 'Celulares_Modelos',
'creative': 'blp_Celulares_Modelos',
'position': '04'

}
]
}
}
});                    

                
                
                
        /*PRIMER NIVEL COMPUTO*/ 

            break;
            case '/tienda/cómputo-y-electrónica/cat5150041':
            
dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
'id': 'computo_camaras_200619',
'name': 'Cómputo_Cámaras',
'creative': 'blpmob_Cómputo_Cámaras',
'position': '01'
},
{
'id': 'computo_computadoras_200619',
'name': 'Cómputo_Computadoras',
'creative': 'blp_Cómputo_Computadoras',
'position': '02'
},
{

'id': 'computo_pantallas_200619',
'name': 'Cómputo_Pantallas',
'creative': 'blp_Cómputo_Pantallas',
'position': '03'
                                                
},
{
'id': 'computo_fotocine_200619',
'name': 'Cómputo_Fotocine',
'creative': 'blp_Cómputo_Fotocine',
'position': '04'
},
{    

'id': 'computo_instrumentos_musicales_200619',
'name': 'Cómputo_Instrumentos_Musicales',
'creative': 'blp_Cómputo_Instrumentos_Musicales',
'position': '05'

}
]
}
}
});                    
        
                
        
                        /*PRIMER NIVEL JUGUETES*/ 

            break;
            case '/tienda/juguetes/cat1080656':
            
dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
'id': 'blpmob_mejores_juguetes_200619',
'name': 'Juguetes_Mejores_Juguetes',
'creative': 'blpmob_Mejores_Juguetes',
'position': '01'
},
{
'id': 'blp_juguetes_construccion_200619',
'name': 'Juguetes_Construcción',
'creative': 'blp_Juguetes_Construcción',
'position': '02'
},
{

'id': 'blp_juguetes_lanzadores_200619',
'name': 'Juguetes_Lanzadores',
'creative': 'blp_juguetes_Lanzadores',
'position': '03'
                                                
},
{
'id': 'blp_juguetes_videojuegos_200619',
'name': 'Juguetes_Videojuegos',
'creative': 'blp_Juguetes_Videojuegos',
'position': '04'
},
{    

'id': 'blp_juguetes_disney_200619',
'name': 'Juguetes_Disney',
'creative': 'blp_Juguetes_Disney',
'position': '05'
},
{    
'id': 'blp_juguetes_munecas_200619',
'name': 'Juguetes_Munecas',
'creative': 'blp_Juguetes_Munecas',
'position': '06'

},
{
    
'id': 'blp_juguetes_airelibre_200619',
'name': 'Juguetes_Aire_Libre',
'creative': 'blp_Juguetes_Aire_Libre',
'position': '07'
},
{
    
'id': 'blp_juguetes_figurasaccion_200619',
'name': 'Juguetes_Figuras_Acción',
'creative': 'blp_Juguetes_Figuras_Acción',
'position': '08'
}
]
}
}
});    
                
                
                        /*PRIMER NIVEL Relojes*/ 

            break;
            case '/tienda/relojes-lentes-y-joyería/cat4570008':
            
dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
 'id': 'relojes_main_200619',
 'name': 'relojes_Principal',
 'creative': 'blpmob_relojes_main',
 'position': '01'
},
{
 'id': 'relojes_main_200619',
 'name': 'relojes_Principal',
 'creative': 'blp_relojes_main',
 'position': '02'
},
{

 'id': 'relojes_joyeria_200619',
 'name': 'relojes_Joyería',
 'creative': 'blp_relojes_joyería',
 'position': '03'
                                                
},
{
 'id': 'relojes_ella_200619',
 'name': 'relojes_Ella',
 'creative': 'blp_relojes_ella',
 'position': '04'
},
{    

 'id': 'relojes_el_200619',
 'name': 'relojes_El',
 'creative': 'blp_relojes_el',
 'position': '05'
},
{    
 'id': 'lentes_ella_200619',
 'name': 'lentes_ella',
 'creative': 'blp_lentes_ella',
 'position': '06'

},
{
    
 'id': 'lentes_el_200619',
 'name': 'lentes_el',
 'creative': 'blp_lentes_el',
 'position': '07'
},
{
    
 'id': 'relojes_bomberg_200619',
 'name': 'relojes_bomberg',
 'creative': 'blp_relojes_bomberg',
 'position': '08'
},
{
 'id': 'relojes_longines_200619',
 'name': 'relojes_longines',
 'creative': 'blp_relojes_longines',
 'position': '09'
},
{

 'id': 'relojes_michael_kors_200619',
 'name': 'relojes_michael_kors',
 'creative': 'blp_michael_kors',
 'position': '10'
                                                
},
{
 'id': 'relojes_mido_200619',
 'name': 'relojes_mido',
 'creative': 'blp_mido',
 'position': '11'
},
{    

 'id': 'relojes_montblanc_200619',
 'name': 'relojes_montblanc',
 'creative': 'blp_montblanc',
 'position': '12'
},
{    
 'id': 'relojes_rado_200619',
 'name': 'relojes_rado',
 'creative': 'blp_rado',
 'position': '13'

},
{
    
 'id': 'relojes_rayban_200619',
 'name': 'relojes_rayban',
 'creative': 'blp_rayban',
 'position': '14'
},
{
    
 'id': 'relojes_swarovski_200619',
 'name': 'relojes_swarovski',
 'creative': 'blp_swarovski',
 'position': '15'
},
{    
 'id': 'relojes_tag_200619',
 'name': 'relojes_tag',
 'creative': 'blp_tag',
 'position': '16'
},
{        
 'id': 'relojes_tissot_200619',
 'name': 'relojes_tissot',
 'creative': 'blp_tissot',
 'position': '17'
}
]
}
}
});        
                
                
/*PRIMER NIVEL ELLA*/ 

break;
case '/tienda/ella/cat5040494':


dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
'id': 'ella_main_230719',
'name': 'Ella - Liverpool',
'creative': 'blp_ella_principal',
'position': '01'
},
{
'id': 'ella_main_230719',
'name': 'Ella - Liverpool',
'creative': 'blp_ella_lenceria',
'position': '02'
},
{
'id': 'ella_main_230719',
'name': 'Ella - Liverpool',
'creative': 'blp_ella_zapatos',
'position': '03'
},
{
'id': 'ella_main_230719',
'name': 'Ella - Liverpool',
'creative': 'blp_ella_bolsas',
'position': '04'
},
{
'id': 'ella_main_230719',
'name': 'Ella - Liverpool',
'creative': 'blp_ella_accesorios',
'position': '05'
},
{
'id': 'ella_main_230719',
'name': 'Ella - Liverpool',
'creative': 'blp_ella_zap_makeup',
'position': '06'
},
{
'id': 'ella_main_230719',
'name': 'Ella - Liverpool',
'creative': 'blp_ella_zap_skincare',
'position': '07'
},
{
'id': 'ella_main_230719',
'name': 'Ella - Liverpool',
'creative': 'blp_ella_curvy',
'position': '08'
},
{
'id': 'ella_main_230719',
'name': 'Ella - Liverpool',
'creative': 'blp_ella_jeans',
'position': '09'
},
{
'id': 'ella_main_230719',
'name': 'Ella - Liverpool',
'creative': 'blp_ella_maternidad',
'position': '10'
},

]
}
}
});



 /*PRIMER NIVEL ZAPATOS*/ 
break;
case '/tienda/zapatos/cat5040494':
dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
'id': 'zapatos_main_200619',
'name': 'Zapatos_Principal',
'creative': 'blp_el_zapatos_principal',
'position': '01'
},
{
'id': 'zapatos_main_200619',
'name': 'Zapatos_Principal',
'creative': 'blp_el_zapatos_el_graduacion',
'position': '02'
},
{
'id': 'zapatos_main_200619',
'name': 'Zapatos_Principal',
'creative': 'blp_el_zapatos_ella_graduacion',
'position': '03'
},
{
'id': 'zapatos_main_200619',
'name': 'Zapatos_Principal',
'creative': 'blp_el_zapatos_nina_graduacion',
'position': '04'
},
{
'id': 'zapatos_main_200619',
'name': 'Zapatos_Principal',
'creative': 'blp_el_zapatos_nino_graduacion',
'position': '05'
},
{
'id': 'new_arrivals_zap_200519',
'name': 'New Arrivals 1',
'creative': 'blp_zapatos_New_Arrivals_1',
'position': '06'
},
{
'id': 'zapatos_main_200619',
'name': 'Zapatos_Principal',
'creative': 'blp_el_zapatos_video',
'position': '07'
},
{
'id': 'zapatos_main_200619',
'name': 'Zapatos_Principal',
'creative': 'blp_el_zapatos_bebes',
'position': '08'
},
{
'id': 'zapatos_main_200619',
'name': 'Zapatos_Principal',
'creative': 'blp_el_zapatos_deportivos',
'position': '09'
},
]
}
}
});            


/* PRIMER NIVEL Halloween Navidad */
break;
case '/tienda/navidad-y-halloween/catst1718701':

dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.


{
'id': 'halloween_270819',
'name': 'Halloween',
'creative': 'blp_Halloween_disfraces',
'position': '02'
},
{
'id': 'halloween_270819',
'name': 'Halloween',
'creative': 'blp_Halloween_decoracion',
'position': '03'
},
{
'id': 'halloween_270819',
'name': 'Halloween',
'creative': 'blp_Halloween_accesorios',
'position': '04'
},
{
'id': 'halloween_270819',
'name': 'Halloween',
'creative': 'blp_Halloween_tradiciones',
'position': '06'
},
{
'id': 'navidad_040919',
'name': 'Navidad Principal',
'creative': 'blp_Navidad_Principal',
'position': '06'
},
{
'id': 'wonderful_040919',
'name': 'Navidad Wonderful',
'creative': 'blp_Navidad_Wonderful',
'position': '07'
},
{
'id': 'scandic_040919',
'name': 'Navidad Scandic',
'creative': 'blp_Navidad_Scandic',
'position': '08'
},
{
'id': 'black_040919',
'name': 'Navidad Black',
'creative': 'blp_Navidad_Black',
'position': '09'
},
{
'id': 'nordic_040919',
'name': 'Navidad Nordic',
'creative': 'blp_Navidad_Nordic',
'position': '10'
},
{
'id': 'golden_040919',
'name': 'Navidad Golden',
'creative': 'blp_Navidad_Golden',
'position': '11'
},
{
'id': 'natural_040919',
'name': 'Navidad Natural',
'creative': 'blp_Navidad_Natural',
'position': '12'
},
{
'id': 'metalic_040919',
'name': 'Navidad Metalic',
'creative': 'blp_Navidad_Metalic',
'position': '13'
},
{
'id': 'geometric_040919',
'name': 'Navidad Geometric',
'creative': 'blp_Navidad_Geometric',
'position': '14'
}

]
}
}
});



        
                
    // Brand Etam
break;
case '/tienda/etam/cat1200649':

dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.


{
'id': 'blp_etam_main_200619',
'name': 'etam_Principal',
'creative': 'blp_etam_main',
'position': '01'
},
{
'id': 'blp_etam_bra_200519',
'name': 'Etam Bra',
'creative': 'blp_etam_bra',
'position': '02'
},
{
'id': 'blp_etam_bodys_200519',
'name': 'Etam Bodys',
'creative': 'blp_etam_pantys',
'position': '03'
},
{
'id': 'etam_200519',
'name': 'etam',
'creative': 'blp_etam_bodys',
'position': '04'
},
{
'id': 'blp_etam_pijamas_200519',
'name': 'Etam Pijamas',
'creative': 'blp_etam_pijamas',
'position': '05'
},
{
'id': 'blp_etam_trajebanio_200519',
'name': 'Etam Trajes de Baño',
'creative': 'blp_etam_trajebano',
'position': '06'
},
{
'id': 'blp_etam_novias_200519',
'name': 'Etam Novias',
'creative': 'blp_etam_novias',
'position': '07'
}
]
}
}
});


// Brand Raíces
break;
case '/tienda/raíces-mx/catst9673334':

dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.


{
'id': 'blp_raices_ropa_200519',
'name': 'raices ropa',
'creative': 'blp_raices_ropa',
'position': '01'
},
{
'id': 'blp_raices_bolsas_200519',
'name': 'raices bolsas',
'creative': 'blp_raices_bolsas',
'position': '02'
},
{
'id': 'blp_raices_zapatos_200519',
'name': 'raices zapatos',
'creative': 'blp_raices_zapatos',
'position': '03'
},
{
'id': 'blp_raices_accesorios_200519',
'name': 'raices accesorios',
'creative': 'blp_raices_accesorios',
'position': '04'
},
{
'id': 'blp_raices_maquillaje_200519',
'name': 'raices maquillaje',
'creative': 'blp_raices_maquillaje',
'position': '05'
},
]
}
}
});


// Nine West
break;
case '//tienda/nine-west/cat4260003':

dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.

{
'id': 'ninewest_200519',
'name': 'ninewest',
'creative': 'blp_ninewest_zapatos',
'position': '01'
},
{
'id': 'ninewest_200519',
'name': 'ninewest',
'creative': 'blp_ninewest_coleccion',
'position': '02'
},
{
'id': 'ninewest_200519',
'name': 'ninewest',
'creative': 'blp_ninewest_bolsas',
'position': '03'
},
{
'id': 'ninewest_200519',
'name': 'ninewest',
'creative': 'blp_ninewest_kids',
'position': '04'
},

]
}
}
});
                

// Punt Roma
                
break;
case '/tienda/punt-roma/cat1200686':

dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.

{
'id': 'punto_roma_180619',
'name': 'punto_roma',
'creative': 'blp_punto_roma_banner_principal',
'position': '01'
},
{
'id': 'punto_roma_180619',
'name': 'punto_roma',
'creative': 'blp_punto_roma_look',
'position': '02'
},
{
'id': 'punto_roma_180619',
'name': 'punto_roma',
'creative': 'blp_punto_roma_bolsas',
'position': '03'
},
{
'id': 'punto_roma_180619',
'name': 'punto_roma',
'creative': 'blp_punto_roma_exclusivos',
'position': '04'
},
{
'id': 'punto_roma_180619',
'name': 'punto_roma',
'creative': 'blp_punto_roma_video',
'position': '05'
},

]
}
}
});

/* That´s it */ 

break;
case '/tienda/that-s-it/cat21010228':

dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
'id': 'thats_it_200619',
'name': 'thats_it',
'creative': 'blp_banner_principal_thats_it',
'position': '01'
},
{
'id': 'thats_it_200619',
'name': 'thats_it',
'creative': 'blp_banner_vestidos_thats_it',
'position': '02'
},
{
'id': 'thats_it_200619',
'name': 'thats_it',
'creative': 'blp_banner_playeras_thats_it',
'position': '03'
},
{
'id': 'thats_it_200619',
'name': 'thats_it',
'creative': 'blp_banner_blusas_thats_it',
'position': '04'
},
{
'id': 'thats_it_200619',
'name': 'thats_it',
'creative': 'blp_banner_accesorios_thats_it',
'position': '05'
},
{
'id': 'thats_it_200619',
'name': 'thats_it',
'creative': 'blp_banner_trajes_bano_thats_it',
'position': '06'
},
{
'id': 'thats_it_200619',
'name': 'thats_it',
'creative': 'blp_banner_pantalones_thats_it',
'position': '07'
},
{
'id': 'thats_it_200619',
'name': 'thats_it',
'creative': 'blp_banner_shorts_thats_it',
'position': '08'
},
{
'id': 'thats_it_200619',
'name': 'thats_it',
'creative': 'blp_banner_trajes_ninas_thats_it',
'position': '09'
},
{
'id': 'thats_it_200619',
'name': 'thats_it',
'creative': 'blp_banner_ninos_thats_it',
'position': '10'
},
]
}
}
});


/* Michael Kors*/ 

break;
case '/tienda/michael-kors/cat4980014':

dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.

{
'id': 'Michael_Kors_200619',
'name': 'Michael_Kors',
'creative': 'blp_michael_banner_wap_kors',
'position': '01'
},
{
'id': 'Michael_Kors_200619',
'name': 'Michael_Kors',
'creative': 'blp_banner_michael_kors_smart',
'position': '02'
},
{
'id': 'Michael_Kors_200619',
'name': 'Michael_Kors',
'creative': 'blp_banner_lentes_michael_kors',
'position': '03'
},
{
'id': 'Michael_Kors_200619',
'name': 'Michael_Kors',
'creative': 'blp_banner_smartwatch_michael_kors',
'position': '04'
},
{
'id': 'Michael_Kors_200619',
'name': 'Michael_Kors',
'creative': 'blp_banner_joyeria_michael_kors',
'position': '05'
},
{
'id': 'Michael_Kors_200619',
'name': 'Michael_Kors',
'creative': 'blp_banner_wonderlust_michael_kors',
'position': '06'
},
]
}
}
});


/* GAP */ 

break;
case '/tienda/gap/catst1312370':


dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
'id': 'gap_main_200619',
'name': 'gap_Principal',
'creative': 'blp_gap_main',
'position': '01'
},
{
'id': 'gap_200519',
'name': 'gap',
'creative': 'blp_gap_back_nina',
'position': '02'
},
{
'id': 'gap_200519',
'name': 'gap',
'creative': 'blp_gap_back_nino',
'position': '03'
},
{
'id': 'gap_200519',
'name': 'gap',
'creative': 'blp_gap_back_pantalones_nino',
'position': '04'
},
{
'id': 'gap_200519',
'name': 'gap',
'creative': 'blp_gap_back_pantalones_nina',
'position': '05'
},
{
'id': 'gap_200519',
'name': 'gap',
'creative': 'blp_gap_back_chamarras_nino',
'position': '06'
},
{
'id': 'gap_200519',
'name': 'gap',
'creative': 'blp_gap_back_chamarras_nina',
'position': '07'
},
{
'id': 'gap_main_200619',
'name': 'gap_Principal',
'creative': 'blp_gap_video_infantiles',
'position': '08'
},
{
'id': 'gap_main_200619',
'name': 'gap_Principal',
'creative': 'blp_gap_video_denim',
'position': '09'
},
{
'id': 'gap_200519',
'name': 'gap',
'creative': 'blp_gap_back_denim_el',
'position': '10'
},
{
'id': 'gap_200519',
'name': 'gap',
'creative': 'blp_gap_back_denim',
'position': '11'
},
{
'id': 'gap_200519',
'name': 'gap',
'creative': 'blp_gap_back_denim_ella',
'position': '12'
}
]
}
}
});        
                

/* BLP west elm*/
                
                
            break;
            case '/tienda/west-elm/cat6600048':    
                
                
                

dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'main_210619',
    'name': 'West Elm Main',
    'creative': 'blp_we_main',
    'position': '01'
},
{
    'id': 'comedores_210619',
    'name': 'West Elm Comedores',
    'creative': 'blp_we_comedores',
    'position': '02'
},
{
    'id': 'salas_210619',
    'name': 'West Elm Salas',
    'creative': 'blp_we_salas',
    'position': '03'
},
{
    'id': 'tapetes_210619',
    'name': 'West Elm Tapetes',
    'creative': 'blp_we_tapetes',
    'position': '04'
},
{
    'id': 'articulos_210619',
    'name': 'West Elm Articulos',
    'creative': 'blp_we_articulos',
    'position': '05'
},
{
    'id': 'cojines_210619',
    'name': 'West Elm Cojines',
    'creative': 'blp_we_cojines',
    'position': '06'
}
]
}
}
});

                
                
/*BLP AMERICAN EAGLE*/ 
       
            break;
            case '/tienda/american-eagle/catst9485126':


dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'jeans_ella_210619',
    'name': 'AE Jeans Ella',
    'creative': 'blp_ae_jeans_ella',
    'position': '01'
},
{
    'id': 'jeans_el_210619',
    'name': 'AE Jeans El',
    'creative': 'blp_ae_jeans_el',
    'position': '02'
},
{
    'id': 'curvy_jeans_210619',
    'name': 'AE Curvy Jeans',
    'creative': 'blp_ae_curvy_jeans',
    'position': '03'
},
{
    'id': 'airflex_210619',
    'name': 'AE Airflex',
    'creative': 'blp_ae_airflex',
    'position': '04'
},
{
    'id': 'playeras_ella_210619',
    'name': 'AE Playeras Ella',
    'creative': 'blp_ae_playeras_ella',
    'position': '05'
},
{
    'id': 'playeras_el_210619',
    'name': 'AE Playeras El',
    'creative': 'blp_ae_playeras_el',
    'position': '06'
},
{
    'id': 'blusas_ella_210619',
    'name': 'AE Blusas Ella',
    'creative': 'blp_ae_blusas_ella',
    'position': '07'
},
{
    'id': 'polos_el_210619',
    'name': 'AE Polos El',
    'creative': 'blp_ae_polos_el',
    'position': '08'
}
]
}
}
});            
     
 
/* BLP PUMA*/ 
       
            break;
            case '/tienda/puma/cat4190004':


dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'puma_cabeza_210619',
    'name': 'Cabeza Puma',
    'creative': 'blp_puma_cabeza',
    'position': '01'
},
{
    'id': 'sportstyle_210619',
    'name': 'SportStyle Puma',
    'creative': 'blp_puma_sportstyle',
    'position': '02'
},
{
    'id': 'futbol_210619',
    'name': 'Futbol Puma',
    'creative': 'blp_puma_futbol',
    'position': '03'
},
{
    'id': 'training_210619',
    'name': 'Training Puma',
    'creative': 'blp_puma_training',
    'position': '04'
},
{
    'id': 'woman_210619',
    'name': 'Woman Puma',
    'creative': 'blp_puma_woman',
    'position': '05'
},
{
    'id': 'accesorios_210619',
    'name': 'Accesorios Puma',
    'creative': 'blp_puma_accesorios',
    'position': '06'
},
{
    'id': 'motosport_210619',
    'name': 'Motosport Puma',
    'creative': 'blp_puma_motosport',
    'position': '07'
},
{
    'id': 'kids_210619',
    'name': 'Kids Puma',
    'creative': 'blp_puma_kids',
    'position': '08'
}
]
}
}
});       
                
                
/* BLP ADIDAS*/ 
       
            break;
            case '/tienda/adidas/cat4190005':


dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'adidas_cabeza_210619',
    'name': 'Cabeza Adidas',
    'creative': 'blp_adidas_cabeza',
    'position': '01'
},
{
    'id': 'primeknit_210619',
    'name': 'Adidas Primeknit',
    'creative': 'blp_adidas_primeknit',
    'position': '02'
},
{
    'id': 'mujer_210619',
    'name': 'Adidas Mujer',
    'creative': 'blp_adidas_mujer',
    'position': '03'
},
{
    'id': 'hombre_210619',
    'name': 'Adidas Hombre',
    'creative': 'blp_adidas_hombre',
    'position': '04'
},
{
    'id': 'nino_210619',
    'name': 'Adidas Niño',
    'creative': 'blp_adidas_niño',
    'position': '05'
},
{
    'id': 'nina_210619',
    'name': 'Adidas Niña',
    'creative': 'blp_adidas_niña',
    'position': '06'
},
{
    'id': 'nofakers_210619',
    'name': 'Adidas No Fakers',
    'creative': 'blp_adidas_nofakers',
    'position': '07'
},
{
    'id': 'ultraboost_210619',
    'name': 'Adidas Ultraboost',
    'creative': 'blp_adidas_ultraboost',
    'position': '08'
},
{
    'id': 'sleek_210619',
    'name': 'Adidas Sleek',
    'creative': 'blp_adidas_sleek',
    'position': '09'
},
{
    'id': 'nino_210619',
    'name': 'Adidas Niño',
    'creative': 'blp_adidas_niño',
    'position': '10'
},
{
    'id': 'nina_210619',
    'name': 'Adidas Niña',
    'creative': 'blp_adidas_niña',
    'position': '11'
}
]
}
}
});    
      
                
/* BLP NIKE*/ 
       
            break;
            case '/tienda/nike/cat4190003':


dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
'id': 'nike_woman_240619',
'name': 'Nike Woman Main',
'creative': 'blp_nike_woman_main',
'position': '01'
},
{
'id': 'correr_woman_240619',
'name': 'Nike Woman Correr',
'creative': 'blp_nike_woman_correr',
'position': '02'
},
{
'id': 'entrenamiento_woman_240619',
'name': 'Nike Woman Entrenamiento',
'creative': 'blp_nike_woman_entrenamiento',
'position': '03'
},
{
'id': 'lifestyle_woman_240619',
'name': 'Nike Woman Lifestyle',
'creative': 'blp_nike_woman_lifestyle',
'position': '04'
},
{
'id': 'endit_240619',
'name': 'Nike End It',
'creative': 'blp_nike_endit',
'position': '05'
},
{
'id': 'correr_man_240619',
'name': 'Nike Man Correr',
'creative': 'blp_nike_man_correr',
'position': '06'
},
{
'id': 'entrenamiento_man_240619',
'name': 'Nike Man Entrenamiento',
'creative': 'blp_nike_man_entrenamiento',
'position': '07'
},
{
'id': 'lifestyle_man_240619',
'name': 'Nike Man Lifestyle',
'creative': 'blp_nike_man_lifestyle',
'position': '08'
},
{
'id': 'allforone_240619',
'name': 'Nike All for One',
'creative': 'blp_nike_man_allforone',
'position': '09'
},
{
'id': 'nina_240619',
'name': 'Nike Niña',
'creative': 'blp_nike_nina',
'position': '10'
},
{
'id': 'nino_240619',
'name': 'Nike Niño',
'creative': 'blp_nike_nino',
'position': '11'
}
]
}
}
});                
      
/* BLP URBAN DECAY*/ 
       
            break;
            case '/tienda/urban-decay/cat5190059':


dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'ud_main_210619',
    'name': 'UD Cabeza',
    'creative': 'blp_ud_cabeza',
    'position': '01'
},
{
    'id': 'naked_210619',
    'name': 'UD Naked',
    'creative': 'blp_ud_naked',
    'position': '02'
},
{
    'id': 'staynaked_090819',
    'name': 'UD Stay Naked',
    'creative': 'blp_ud_staynaked',
    'position': '03'
},
{
    'id': 'eyes_210619',
    'name': 'UD Eyes',
    'creative': 'blp_ud_eyes',
    'position': '04'
},
{
    'id': 'brush_210619',
    'name': 'UD Brush',
    'creative': 'blp_ud_brush',
    'position': '05'
},
{
    'id': 'labios_210619',
    'name': 'UD Labios',
    'creative': 'blp_ud_labios',
    'position': '06'
},
{
    'id': 'labios_210619',
    'name': 'UD Skin',
    'creative': 'blp_ud_skin',
    'position': '07'
}
]
}
}
});
       
      
/* BLP PICKBOX*/ 
       
            break;
            case '/tienda/pick-box/catst11034202':


dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'pickbox1_260619',
    'name': 'Pickbox Caja 1',
    'creative': 'blp_pickbox_1',
    'position': '01'
},
{
    'id': 'pickbox2_260619',
    'name': 'Pickbox Caja 2',
    'creative': 'blp_pickbox_2',
    'position': '02'
},
{
    'id': 'pickbox3_260619',
    'name': 'Pickbox Caja 3',
    'creative': 'blp_pickbox_3',
    'position': '03'
},
{
    'id': 'pickbox4_260619',
    'name': 'Pickbox Caja 4',
    'creative': 'blp_pickbox_4',
    'position': '04'
},
{
    'id': 'pickbox5_260619',
    'name': 'Pickbox Caja 5',
    'creative': 'blp_pickbox_5',
    'position': '05'
},
{
    'id': 'pickbox6_260619',
    'name': 'Pickbox Caja 6',
    'creative': 'blp_pickbox_6',
    'position': '06'
}
]
}
}
});
                
                
/* BLP MAC*/ 
       
            break;
            case '/tienda/mac/cat4450237':


dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'artstudio_090919',
    'name': 'Mac Art Studio',
    'creative': 'blp_mac_artstudio',
    'position': '01'
},
{

    'id': 'extradimension_090819',
    'name': 'Mac Extra Dimension',
    'creative': 'blp_mac_extradimension',
    'position': '02'
},
{
    'id': 'electricwonder_210619',
    'name': 'Mac Electricwonder',
    'creative': 'blp_mac_electricwonder',
    'position': '03'
},
{
    'id': 'bases_210619',
    'name': 'Mac Bases',
    'creative': 'blp_mac_bases',
    'position': '04'
},
{
    'id': 'lipstick_210619',
    'name': 'Mac Lipstick',
    'creative': 'blp_mac_lipstick',
    'position': '05'
},
{
    'id': 'primer_210619',
    'name': 'Mac Primer',
    'creative': 'blp_mac_primer',
    'position': '06'
},
{
    'id': 'sombras_210619',
    'name': 'Mac Sombras',
    'creative': 'blp_mac_sombras',
    'position': '07'
}
]
}
}
});


                
/* BLP ANASTASIA*/ 
       
            break;
            case '/tienda/anastasia-beverly-hills/catst11447465':


dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'anastasia_main_210619',
    'name': 'Anastasia Cabeza',
    'creative': 'blp_anastasia_cabeza',
    'position': '01'
},
{
    'id': 'cejas_210619',
    'name': 'Anastasia Cejas',
    'creative': 'blp_anastasia_cejas',
    'position': '02'
},
{
    'id': 'powerduo_210619',
    'name': 'Anastasia Powerduo',
    'creative': 'blp_anastasia_power',
    'position': '03'
},
{
    'id': 'brows_210619',
    'name': 'Anastasia Brows',
    'creative': 'blp_anastasia_brows',
    'position': '04'
},
{
    'id': 'eyes_210619',
    'name': 'Anastasia Eyes',
    'creative': 'blp_anastasia_eyes',
    'position': '05'
},
{
    'id': 'face_210619',
    'name': 'Anastasia Face',
    'creative': 'blp_anastasia_face',
    'position': '06'
},
{
    'id': 'lipstcik_210619',
    'name': 'Anastasia Lipstick',
    'creative': 'blp_anastasia_lipstick',
    'position': '07'
}
]
}
}
});
                
/* BLP THE NORTH FACE TNF*/ 
       
            break;
            case '/tienda/the-north-face/catst12274633':


dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'chamarras_210619',
    'name': 'TNF Chamarras',
    'creative': 'blp_tnf_chamarras',
    'position': '01'
},
{
    'id': 'ropa_210619',
    'name': 'TNF Ropa',
    'creative': 'blp_tnf_ropa',
    'position': '02'
},
{
    'id': 'calzado_210619',
    'name': 'TNF Calzado',
    'creative': 'blp_tnf_calzado',
    'position': '03'
},
{
    'id': 'accesorios_210619',
    'name': 'TNF Accesorios',
    'creative': 'blp_tnf_accesorios',
    'position': '04'
}
]
}
}
});
                
                
/* BLP LEVIS*/ 
       
            break;
            case '/tienda/levi-s/cat910605':


dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'levis_main_210619',
    'name': 'Levis Main',
    'creative': 'blp_levis_main',
    'position': '01'
},
{
    'id': 'el_210619',
    'name': 'Levis El',
    'creative': 'blp_levis_el',
    'position': '02'
},
{
    'id': 'ella_210619',
    'name': 'Levis Ella',
    'creative': 'blp_levis_ella',
    'position': '03'
},
{
    'id': 'plus_210619',
    'name': 'Levis Plus',
    'creative': 'blp_levis_plus',
    'position': '04'
},
{
    'id': 'chamarras_210619',
    'name': 'Levis Chamarras',
    'creative': 'blp_levis_chamarras',
    'position': '05'
},
{
    'id': 'camisas_210619',
    'name': 'Levis Camisas',
    'creative': 'blp_levis_camisas',
    'position': '06'
},
{
    'id': 'accesorios_210619',
    'name': 'Levis Accesorios',
    'creative': 'blp_levis_accesorios',
    'position': '07'
},
{
    'id': 'zapatos_210619',
    'name': 'Levis Zapatos',
    'creative': 'blp_levis_zapatos',
    'position': '08'
},
{
    'id': 'kids_210619',
    'name': 'Levis Kids',
    'creative': 'blp_levis_kids',
    'position': '09'
}
]
}
}
});
                
/* BLP HUGO BOSS*/ 
       
            break;
            case '/tienda/hugo/catst12694505':


dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'tops_el_210619',
    'name': 'Hugo Tops Él',
    'creative': 'blp_hugo_tops_el',
    'position': '01'
},
{
    'id': 'accesorios_el_210619',
    'name': 'Hugo Accesorios',
    'creative': 'blp_hugo_accesorios_el',
    'position': '02'
},
{
    'id': 'bottoms_el_210619',
    'name': 'Hugo Bottoms',
    'creative': 'blp_hugo_bottoms_el',
    'position': '03'
},
{
    'id': 'tops_ella_210619',
    'name': 'Hugo Tops Ella',
    'creative': 'blp_hugo_tops_ella',
    'position': '04'
},
{
    'id': 'bottoms_ella_210619',
    'name': 'Hugo Bottoms Ella',
    'creative': 'blp_hugo_bottoms_ella',
    'position': '05'
},
{
    'id': 'accesorios_ella_210619',
    'name': 'Hugo Accesorios Ella',
    'creative': 'blp_hugo_accesorios_ella',
    'position': '06'
}
]
}
}
});
                
/* BLP CALVIN KLEIN CK*/ 
       
            break;
            case '/tienda/calvin-klein/cat4990262':


dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'ck_main_220819',
    'name': 'CK Main',
    'creative': 'blp_ck_main',
    'position': '01'
},
{
    'id': 'ck_main_ella_220819',
    'name': 'CK Main Ella',
    'creative': 'blp_ck_main_ella',
    'position': '02'
},
{
    'id': 'ck_main_el_220819',
    'name': 'CK Main El',
    'creative': 'blp_ck_main_el',
    'position': '03'
},
{
    'id': 'ck_ropa_ella_220819',
    'name': 'CK Ropa Ella',
    'creative': 'blp_ck_ropa_ella',
    'position': '04'
},
{
    'id': 'ck_ropa_el_220819',
    'name': 'CK Ropa El',
    'creative': 'blp_ck_ropa_el',
    'position': '05'
},
{
    'id': 'ck_footwear_ella_220819',
    'name': 'CK Footwear Ella',
    'creative': 'blp_ck_footwear_ella',
    'position': '06'
},
{
    'id': 'ck_footwear_el_220819',
    'name': 'CK Footwear El',
    'creative': 'blp_ck_footwear_el',
    'position': '07'
},
{
    'id': 'ck_relojes_220819',
    'name': 'CK Relojes',
    'creative': 'blp_ck_relojes',
    'position': '08'
},
{
    'id': 'ck_fragancias_220819',
    'name': 'CK Fragancias',
    'creative': 'blp_ck_fragancias',
    'position': '09'
},
{
    'id': 'ck_lentes_220819',
    'name': 'CK Lentes',
    'creative': 'blp_ck_lentes',
    'position': '10'
}
]
}
}
});
                
      
/* BLP APPLE*/ 
       
            break;
            case '/tienda/apple/catst2145072':


dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'main_210619',
    'name': 'Apple Main',
    'creative': 'blp_apple_main',
    'position': '01'
},
{
    'id': 'watch_210619',
    'name': 'Apple Watch',
    'creative': 'blp_apple_watch',
    'position': '02'
},
{
    'id': 'macbook_210619',
    'name': 'Apple Macbook',
    'creative': 'blp_apple_macbook',
    'position': '03'
},
{
    'id': 'homepod_210619',
    'name': 'Apple Homepedo',
    'creative': 'blp_apple_homepod',
    'position': '04'
},
{
    'id': 'macbookair_210619',
    'name': 'Apple Macbookair',
    'creative': 'blp_apple_macbookair',
    'position': '05'
},
{
    'id': 'ipad_210619',
    'name': 'Apple Ipad',
    'creative': 'blp_apple_ipad',
    'position': '06'
},
{
    'id': 'imac_210619',
    'name': 'Apple Imac',
    'creative': 'blp_apple_imac',
    'position': '07'
},
{
    'id': 'accesorios_210619',
    'name': 'Apple Accesorios',
    'creative': 'blp_apple_accesorios',
    'position': '08'
},
{
    'id': 'macpro_210619',
    'name': 'Apple Macpro',
    'creative': 'blp_apple_macpro',
    'position': '09'
}
]
}
}
});
                
                
/* BLP MONTBLANC*/ 
       
            break;
            case '/tienda/montblanc/cat4470002':


dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'summit2_210619',
    'name': 'MontBlanc Summit',
    'creative': 'blp_mont_summit',
    'position': '01'
},
{
    'id': 'brazaletes_210619',
    'name': 'MontBlanc Brazaletes',
    'creative': 'blp_mont_brazaletes',
    'position': '02'
},
{
    'id': 'boligrafos_210619',
    'name': 'MontBlanc Boligrafos',
    'creative': 'blp_mont_boligrafos',
    'position': '03'
},
{
    'id': 'escritura_210619',
    'name': 'MontBlanc Escritura',
    'creative': 'blp_mont_escritura',
    'position': '04'
},
{
    'id': 'accesorios_210619',
    'name': 'MontBlanc Accesorios',
    'creative': 'blp_mont_accesorios',
    'position': '05'
},
{
    'id': 'joyeria_210619',
    'name': 'MontBlanc Joyería',
    'creative': 'blp_mont_joyeria',
    'position': '06'
}
]
}
}
});
     
                
/* BLP URBAN ZONE*/ 
       
            break;
            case '/tienda/urban-zone/catst6806801':


dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'ella_210619',
    'name': 'UZ Ella',
    'creative': 'blp_uz_ella',
    'position': '01'
},
{
    'id': 'topsella_210619',
    'name': 'UZ Tops Ella',
    'creative': 'blp_uz_tops_ella',
    'position': '02'
},
{
    'id': 'topsel_210619',
    'name': 'UZ Tops El',
    'creative': 'blp_uz_tops_el',
    'position': '03'
},
{
    'id': 'bottomsella_210619',
    'name': 'UZ Bottoms Ella',
    'creative': 'blp_uz_bottoms_ella',
    'position': '04'
},
{
    'id': 'bottomsel_210619',
    'name': 'UZ Bottoms El',
    'creative': 'blp_uz_bottoms_el',
    'position': '05'
},
{
    'id': 'el_210619',
    'name': 'UZ El',
    'creative': 'blp_uz_el',
    'position': '06'
},
{
    'id': 'accesorios_ella_210619',
    'name': 'UZ Accesorios Ella',
    'creative': 'blp_uz_accesorios_ella',
    'position': '07'
},
{
    'id': 'tenis_ella_210619',
    'name': 'UZ Tenis Ella',
    'creative': 'blp_uz_tenis_ella',
    'position': '08'
},
{
    'id': 'accesorios_el_210619',
    'name': 'UZ Accesorios El',
    'creative': 'blp_uz_accesorios_el',
    'position': '09'
},
{
    'id': 'tenis_el_210619',
    'name': 'UZ Tenis El',
    'creative': 'blp_uz_tenis_el',
    'position': '10'
}
]
}
}
});
                
/* BLP CATERPILLAR CAT*/ 
       
            break;
            case '/tienda/caterpillar/catst6652931':


dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'maincat_210619',
    'name': 'Caterpillar Main',
    'creative': 'blp_cat_main',
    'position': '01'
},
{
    'id': 'men_210619',
    'name': 'Caterpillar Men',
    'creative': 'blp_cat_men',
    'position': '02'
},
{
    'id': 'women_210619',
    'name': 'Caterpillar Women',
    'creative': 'blp_cat_women',
    'position': '03'
},
{
    'id': 'equipaje_210619',
    'name': 'Caterpillar Equipaje',
    'creative': 'blp_cat_equipaje',
    'position': '04'
},
{
    'id': 'work_210619',
    'name': 'Caterpillar Work',
    'creative': 'blp_cat_work',
    'position': '05'
},
{
    'id': 'accesorios_210619',
    'name': 'Caterpillar Accesorios',
    'creative': 'blp_cat_accesorios',
    'position': '06'
},
{
    'id': 'video_210619',
    'name': 'Caterpillar Video',
    'creative': 'blp_cat_video',
    'position': '07'
}
]
}
}
});
          
/* BLP DIOR*/ 
       
            break;
            case '/tienda/dior/catst8828070':


dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'dior_sauvage_210619',
    'name': 'Dior Sauvage',
    'creative': 'blp_dior_sauvage',
    'position': '01'
},
{
    'id': 'dior_expertise_210619',
    'name': 'Dior Expertise',
    'creative': 'blp_dior_expertise',
    'position': '02'
}
]
}
}
});
        
/* BLP DIOR*/ 
       
            break;
            case '/tienda/dior/catst8828070':


dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'dior_dreamskin_020918',
    'name': 'Dior Dreamskin',
    'creative': 'blp_dior_dreamskin',
    'position': '01'
},
{
    'id': 'dior_expertise_210619',
    'name': 'Dior Expertise',
    'creative': 'blp_dior_expertise',
    'position': '02'
}
]
}
}
});
   
/*BLP BANANA REPUBLIC*/ 

break;
case '/tienda/banana-republic/catst1316206':

dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
'id': 'banana_republic_150819',
'name': 'banana_republic',
'creative': 'blp_banana_republic_principal',
'position': '01'
},
{
'id': 'banana_republic_150819',
'name': 'banana_republic',
'creative': 'blp_banana_republic_video',
'position': '02'
},
{
'id': 'banana_republic_150819',
'name': 'banana_republic',
'creative': 'blp_banana_republic_sueteres_ella',
'position': '03'
},
{
'id': 'banana_republic_150819',
'name': 'banana_republic',
'creative': 'blp_banana_republic_blusas_ella',
'position': '04'
},
{
'id': 'banana_republic_150819',
'name': 'banana_republic',
'creative': 'blp_banana_republic_vestidos',
'position': '05'
},
{
'id': 'banana_republic_150819',
'name': 'banana_republic',
'creative': 'blp_banana_republic_sueteres_el',
'position': '06'
},
{
'id': 'banana_republic_150819',
'name': 'banana_republic',
'creative': 'blp_banana_republic_camisas_el',
'position': '07'
},
{
'id': 'banana_republic_150819',
'name': 'banana_republic',
'creative': 'blp_banana_republic_pantalones_el',
'position': '08'
},
]
}
}
});
                
/* BLP RALPH LAUREN POLO*/ 
       
            break;
            case '/tienda/ralph-lauren/cat4920000':


dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'main_210619',
    'name': 'RL Main',
    'creative': 'blp_rl_main',
    'position': '01'
},
{
    'id': 'ella_210619',
    'name': 'RL Ella',
    'creative': 'blp_rl_ella',
    'position': '02'
},
{
    'id': 'bebes_210619',
    'name': 'RL Bebes',
    'creative': 'blp_rl_bebes',
    'position': '03'
},
{
    'id': 'nina_210619',
    'name': 'RL Nina',
    'creative': 'blp_rl_nina',
    'position': '04'
},
{
    'id': 'nino_210619',
    'name': 'RL Nino',
    'creative': 'blp_rl_nino',
    'position': '05'
}
]
}
}
});
      
                
/* BLP GAIA*/ 
       
            break;
            case '/tienda/gaia/catst13196369':


dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'main_210619',
    'name': 'Gaia Main',
    'creative': 'blp_gaia_main',
    'position': '01'
},
{
    'id': 'accesorios_210619',
    'name': 'Gaia Accesorios',
    'creative': 'blp_gaia_accesorios',
    'position': '02'
},
{
    'id': 'sofa_210619',
    'name': 'Gaia Sofa',
    'creative': 'blp_gaia_sofa',
    'position': '03'
},
{
    'id': 'iluminacion_210619',
    'name': 'Gaia Iluminacion',
    'creative': 'blp_gaia_iluminacion',
    'position': '04'
},
{
    'id': 'sillas_210619',
    'name': 'Gaia Sillas',
    'creative': 'blp_gaia_sillas',
    'position': '05'
}
]
}
}
});
                
/* BLP DISNEY*/ 
       
            break;
            case '/tienda/disney-collection/cat21010034':


dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'main_210619',
    'name': 'Disney Main',
    'creative': 'blp_disney_main',
    'position': '01'
},
{
    'id': 'lluvia_210619',
    'name': 'Disney Lluvia',
    'creative': 'blp_disney_lluvia',
    'position': '02'
},
{
    'id': 'playeras_210619',
    'name': 'Disney Playeras',
    'creative': 'blp_disney_playeras',
    'position': '03'
},
{
    'id': 'stitch_210619',
    'name': 'Disney Stitch',
    'creative': 'blp_disney_stitch',
    'position': '04'
},
{
    'id': 'peluches_210619',
    'name': 'Disney Peluches',
    'creative': 'blp_disney_peluches',
    'position': '05'
},
{
    'id': 'princesas_210619',
    'name': 'Disney Princesas',
    'creative': 'blp_disney_princesas',
    'position': '06'
},
{
    'id': 'munecas_210619',
    'name': 'Disney Muñecas',
    'creative': 'blp_disney_muñecas',
    'position': '07'
},
{
    'id': 'figuras_210619',
    'name': 'Disney Figuras',
    'creative': 'blp_disney_figuras',
    'position': '08'
}
]
}
}
});
                
/* BLP LEGO*/ 
       
            break;
            case '/tienda/lego/cat4050000':


dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'avengers_210619',
    'name': 'Lego Avengers',
    'creative': 'blp_lego_avengers',
    'position': '01'
},
{
    'id': 'architecture_210619',
    'name': 'Lego Architecture',
    'creative': 'blp_lego_architecture',
    'position': '02'
},
{
    'id': 'city_210619',
    'name': 'Lego City',
    'creative': 'blp_lego_city',
    'position': '03'
},
{
    'id': 'ninjago_210619',
    'name': 'Lego Ninjago',
    'creative': 'blp_lego_ninjago',
    'position': '04'
},
{
    'id': 'starwars_210619',
    'name': 'Lego Starwars',
    'creative': 'blp_lego_starwars',
    'position': '05'
},
{
    'id': 'minecraft_210619',
    'name': 'Lego Minecraft',
    'creative': 'blp_lego_minecraft',
    'position': '06'
},
{
    'id': 'technic_210619',
    'name': 'Lego Technic',
    'creative': 'blp_lego_technic',
    'position': '07'
},
{
    'id': 'superheroesdc_210619',
    'name': 'Lego Super Heroes DC',
    'creative': 'blp_lego_superheroesdc',
    'position': '08'
},
{
    'id': 'superheroesmarvel_210619',
    'name': 'Lego Super Heroes Marvel',
    'creative': 'blp_lego_superheroesmarvel',
    'position': '09'
},
{
    'id': 'harrypotter_210619',
    'name': 'Lego Harry Potter',
    'creative': 'blp_lego_harry',
    'position': '10'
},
{
    'id': 'beasts_210619',
    'name': 'Lego Beasts',
    'creative': 'blp_lego_beasts',
    'position': '11'
},
{
    'id': 'classic_210619',
    'name': 'Lego Classic',
    'creative': 'blp_lego_classic',
    'position': '12'
},
{
    'id': 'duplo_210619',
    'name': 'Lego Duplo',
    'creative': 'blp_lego_duplo',
    'position': '13'
},
{
    'id': 'friends_210619',
    'name': 'Lego Friends',
    'creative': 'blp_lego_friends',
    'position': '14'
},
{
    'id': 'creator_210619',
    'name': 'Lego Creator',
    'creative': 'blp_lego_creator',
    'position': '15'
},
{
    'id': 'juniors_210619',
    'name': 'Lego Juniors',
    'creative': 'blp_lego_juniors',
    'position': '16'
},
{
    'id': 'batman_210619',
    'name': 'Lego Batman',
    'creative': 'blp_lego_batman',
    'position': '17'
},
{
    'id': 'speed_210619',
    'name': 'Lego Speed',
    'creative': 'blp_lego_speed',
    'position': '18'
},
{
    'id': 'jurassic_210619',
    'name': 'Lego Jurassic',
    'creative': 'blp_lego_jurassic',
    'position': '19'
},
{
    'id': 'disney_210619',
    'name': 'Lego Disney',
    'creative': 'blp_lego_disney',
    'position': '20'
}
]
}
}
});
                
                
/* BLP SAMSUNG*/ 
       
            break;
            case '/tienda/samsung/cat850172':


dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'main_210619',
    'name': 'Samsung Main',
    'creative': 'blp_samsung_main',
    'position': '01'
},
{
    'id': 'watch_210619',
    'name': 'Samsung Watch',
    'creative': 'blp_samsung_watch',
    'position': '02'
},
{
    'id': 'family_210619',
    'name': 'Samsung Family',
    'creative': 'blp_samsung_family',
    'position': '03'
},
{
    'id': 'tab_210619',
    'name': 'Samsung Tab',
    'creative': 'blp_samsung_tab',
    'position': '04'
},
{
    'id': 'lavadora_210619',
    'name': 'Samsung Lavadora',
    'creative': 'blp_samsung_lavadora',
    'position': '05'
}
]
}
}
});
                
/* BLP LG*/ 
       
            break;
            case '/tienda/lg/cat4990127':


dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
'id': 'main_240619',
'name': 'LG Main',
'creative': 'blp_lg_main',
'position': '01'
},
{
'id': 'pantallas_240619',
'name': 'LG Pantallas',
'creative': 'blp_lg_pantallas',
'position': '02'
},
{
'id': 'refrigeradores_240619',
'name': 'LG Refrigeradores',
'creative': 'blp_lg_refrigeradores',
'position': '03'
},
{
'id': 'celulares_240619',
'name': 'LG Celulares',
'creative': 'blp_lg_celulares',
'position': '04'
}
]
}
}
});
                
/* BLP AEROPOSTALE*/ 
       
            break;
            case '/tienda/aéropostale/cat910660':


dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'principal_290619',
    'name': 'Aero Principal',
    'creative': 'blp_aero_principal',
    'position': '01'
},
{
    'id': 'blusas_210619',
    'name': 'Aero Blusas',
    'creative': 'blp_aero_blusas',
    'position': '02'
},
{
    'id': 'chamarras_210619',
    'name': 'Aero Chamarras',
    'creative': 'blp_aero_chamarras',
    'position': '03'
},
{
    'id': 'playeras_ella_210619',
    'name': 'Aero Playeras Ella',
    'creative': 'blp_aero_playeras_ella',
    'position': '04'
},
{
    'id': 'playeras_el_210619',
    'name': 'Aero Playeras El',
    'creative': 'blp_aero_playeras_el',
    'position': '05'
},
{
    'id': 'ninas_210619',
    'name': 'Aero Ninas',
    'creative': 'blp_aero_ninas',
    'position': '06'
},
{
    'id': 'ninos_210619',
    'name': 'Aero Ninos',
    'creative': 'blp_aero_ninos',
    'position': '07'
}
]
}
}
});               
        
/* BLP POTTERY BARN*/ 
       
            break;
            case '/tienda/pottery-barn/cat7230028':


dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'williams_sonoma_300719',
    'name': 'Williams Sonoma Cintillo',
    'creative': 'blp_pb_ws',
    'position': '01'
},
{
    'id': 'west_elm_300719',
    'name': 'West Elm Cintillo',
    'creative': 'blp_pb_west_elm',
    'position': '02'
},
{
    'id': 'pottery_barn_kids_300719',
    'name': 'Pottery Barn Kids Cintillo',
    'creative': 'blp_pb_pbk',
    'position': '03'
},
{
    'id': 'pottery_barn_teen_300719',
    'name': 'Pottery Barn Teen Cintillo',
    'creative': 'blp_pb_pbt',
    'position': '04'
},    
{
    'id': 'estancia_210619',
    'name': 'PB Estancia',
    'creative': 'blp_pb_estancia',
    'position': '05'
},
{
    'id': 'comedores_210619',
    'name': 'PB Comedores',
    'creative': 'blp_pb_comedores',
    'position': '06'
},
{
    'id': 'blancos_210619',
    'name': 'PB Blancos',
    'creative': 'blp_pb_blancos',
    'position': '07'
},
{
    'id': 'recamara_210619',
    'name': 'PB Recamara',
    'creative': 'blp_pb_recamara',
    'position': '08'
},
{
    'id': 'tapetes_210619',
    'name': 'PB Tapetes',
    'creative': 'blp_pb_tapetes',
    'position': '09'
},
{
    'id': 'decoracion_210619',
    'name': 'PB Decoración',
    'creative': 'blp_pb_decoracion',
    'position': '10'
},
{
    'id': 'mueblesex_210619',
    'name': 'PB Mueblesex',
    'creative': 'blp_pb_mueblesex',
    'position': '11'
},
{
    'id': 'mesabar_210619',
    'name': 'PB Mesabar',
    'creative': 'blp_pb_mesabar',
    'position': '12'
}
]
}
}
});
                
/* BLP WEST ELM*/ 
       
            break;
            case '/tienda/west-elm/cat6600048':


dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'williams_sonoma_300719',
    'name': 'Williams Sonoma Cintillo',
    'creative': 'blp_we_ws',
    'position': '01'
},
{
    'id': 'pottery_barn_300719',
    'name': 'Pottery Barn Cintillo',
    'creative': 'blp_we_pb',
    'position': '02'
},
{
    'id': 'pottery_barn_kids_300719',
    'name': 'Pottery Barn Kids Cintillo',
    'creative': 'blp_we_pbk',
    'position': '03'
},
{
    'id': 'pottery_barn_teen_300719',
    'name': 'Pottery Barn Teen Cintillo',
    'creative': 'blp_we_pbt',
    'position': '04'
},
{
    'id': 'main_210619',
    'name': 'West Elm Main',
    'creative': 'blp_we_main',
    'position': '05'
},
{
    'id': 'comedores_210619',
    'name': 'West Elm Comedores',
    'creative': 'blp_we_comedores',
    'position': '06'
},
{
    'id': 'salas_210619',
    'name': 'West Elm Salas',
    'creative': 'blp_we_salas',
    'position': '07'
},
{
    'id': 'tapetes_210619',
    'name': 'West Elm Tapetes',
    'creative': 'blp_we_tapetes',
    'position': '08'
},
{
    'id': 'articulos_210619',
    'name': 'West Elm Articulos',
    'creative': 'blp_we_articulos',
    'position': '09'
},
{
    'id': 'cojines_210619',
    'name': 'West Elm Cojines',
    'creative': 'blp_we_cojines',
    'position': '10'
}
]
}
}
});                
                
                
                
                
         
/* BLP LANCOME*/ 
       
            break;
            case '/tienda/lancôme/catst11420818':


dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'lancome_lavie_200819',
    'name': 'Lancome Lavie',
    'creative': 'blp_lancome_lavie',
    'position': '01'
},
{
    'id': 'cuidado_piel_200819',
    'name': 'Lancome Cuidado de Piel',
    'creative': 'blp_lancome_cuidado_piel',
    'position': '02'
},
{
    'id': 'maquillaje_200819',
    'name': 'Lancome Maquillaje',
    'creative': 'blp_lancome_maquillaje',
    'position': '03'
},
{
    'id': 'perfumes_200819',
    'name': 'Lancome Perfumes',
    'creative': 'blp_lancome_perfumes',
    'position': '04'
},
{
    'id': 'absolue_200819',
    'name': 'Lancome Absolue',
    'creative': 'blp_lancome_absolue',
    'position': '05'
}
]
}
}
});                
   
        
        
        
        
/* BLP WHIRLPOOL*/ 
       
            break;
            case '/tienda/cat1060780':


dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'whirlpool_main_260819',
    'name': 'Whirlpool Main',
    'creative': 'blp_whirlpool_main',
    'position': '01'
},
{
    'id': 'refrigeradores_260819',
    'name': 'Whirlpool Refrigeradores',
    'creative': 'blp_whirlpool_refrigeradores',
    'position': '02'
},
{
    'id': 'campanas_260819',
    'name': 'Whirlpool Campanas',
    'creative': 'blp_whirlpool_campanas',
    'position': '03'
},
{
    'id': 'aire_260819',
    'name': 'Whirlpool Aire',
    'creative': 'blp_whirlpool_aire',
    'position': '04'
},
{
    'id': 'cocina_260819',
    'name': 'Whirlpool Cocina',
    'creative': 'blp_whirlpool_cocina',
    'position': '05'
},
{
    'id': 'lavadoras_260819',
    'name': 'Whirlpool Lavadoras',
    'creative': 'blp_whirlpool_lavadoras',
    'position': '06'
}
]
}
}
});                
   
        
        
        
        
        
        
        
        
        
        
/* BLP NYX*/ 
       
            break;
            case '/tienda/nyx-professional-makeup/catst14372788':


dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
    'id': 'nyx_main_210819',
    'name': 'Nyx Cabeza',
    'creative': 'blp_nyx_cabeza',
    'position': '01'
},
{
    'id': 'nyx_softmate_210819',
    'name': 'Nyx Softmate',
    'creative': 'blp_nyx_softmate',
    'position': '02'
},
{
    'id': 'nyx_barewithme_210819',
    'name': 'Nyx Barewithme',
    'creative': 'blp_nyx_bare',
    'position': '03'
},
{
    'id': 'nyx_rostro_210819',
    'name': 'Nyx Rostro',
    'creative': 'blp_nyx_rostro',
    'position': '04'
},
{
    'id': 'nyx_brochas_210819',
    'name': 'Nyx Brochas',
    'creative': 'blp_nyx_brochas',
    'position': '05'
},
{
    'id': 'nyx_ojos_210819',
    'name': 'Nyx Ojos',
    'creative': 'blp_nyx_ojos',
    'position': '06'
},
{
    'id': 'nyx_labios_210819',
    'name': 'Nyx Labios',
    'creative': 'blp_nyx_labios',
    'position': '07'
}
]
}
}
});  
        
        
                
                
                



/*PLP ZAPATOS EL*/ 

            break;
            case '/tienda/ver-todo/catst4865352':

dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
'id': 'plp_casuales_220719',
'name': 'Él Casuales',
'creative': 'plp_casuales',
'position': '01'
},
{
'id': 'plp_formales_220719',
'name': 'Él Formales',
'creative': 'plp_formales',
'position': '02'
},
{
'id': 'plp_botas_220719',
'name': 'Él Botas',
'creative': 'plp_botas',
'position': '03'
},
{
'id': 'plp_sneakers_220719',
'name': 'Él Sneakers',
'creative': 'plp_sneakers',
'position': '04'
},
{
'id': 'plp_deportivos_220719',
'name': 'Él Deportivos',
'creative': 'plp_deportivos',
'position': '05'
},
{
'id': 'plp_sandalias_220719',
'name': 'Él Sandalias',
'creative': 'plp_sandalias', 
'position': '06'

}
]
}
}
});

        
/*PLP DEPORTES MOTOS*/ 

            break;
            case '/tienda/motos/catst14469674':

dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
'id': 'plp_deportes_motodeportiva_200819',
'name': 'Motos Deportes Deportiva',
'creative': 'plp_deportes_motodeportiva',
'position': '01'
},
{
'id': 'plp_deportes_motourbana_200819',
'name': 'Motos Deportes Urbana',
'creative': 'plp_deportes_motourbana',
'position': '02'
},
{
'id': 'plp_deportes_motoproporsito_200819',
'name': 'Motos Deportes Proposito',
'creative': 'plp_deportes_motoproposito',
'position': '03'
},
{
'id': 'plp_deportes_motochopper_200819',
'name': 'Motos Deportes Chopper',
'creative': 'plp_deportes_motochopper',
'position': '04'
}
]
}
}
});

        
        
        
/*PLP DEPORTES APARATOS*/ 

            break;
            case '/tienda/aparatos-de-ejercicio/cat5070030':

dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
'id': 'plp_deportes_caminadora_200819',
'name': 'Aparatos Deportes Caminadora',
'creative': 'plp_deportes_caminadora',
'position': '01'
},
{
'id': 'plp_deportes_eliptica_200819',
'name': 'Aparatos Deportes Eliptica',
'creative': 'plp_deportes_eliptica',
'position': '02'
},
{
'id': 'plp_deportes_bicicletas_200819',
'name': 'Aparatos Deportes Bicicletas',
'creative': 'plp_deportes_bicicletas',
'position': '03'
},
{
'id': 'plp_deportes_pesas_200819',
'name': 'Aparatos Deportes Pesas',
'creative': 'plp_deportes_pesas',
'position': '04'
},
{
'id': 'plp_deportes_tv_200819',
'name': 'Aparatos Deportes TV',
'creative': 'plp_deportes_tv',
'position': '05'
},
{
'id': 'plp_deportes_suplementos_200819',
'name': 'Aparatos Deportes Suplementos',
'creative': 'plp_deportes_suplementos',
'position': '06'
},
{
'id': 'plp_deportes_accesorios_200819',
'name': 'Aparatos Deportes Accesorios',
'creative': 'plp_deportes_accesorios',
'position': '07'
}
]
}
}
});

        
        
        
        
        
        
        
        
        
        

      /*PLP BOLSAS ELLA*/ 

            break;
            case '/tienda/ver-todas/catst4003463':  
            
dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
'id': 'plp_cartera_080719',
'name': 'Ella Carteras',
'creative': 'plp_carteras',
'position': '01'
},
{
'id': 'plp_tote_080719',
'name': 'Ella Tote',
'creative': 'plp_tote',
'position': '02'
},
{
'id': 'plp_crossbody_080719',
'name': 'Ella Crossbody',
'creative': 'plp_crossbody',
'position': '03'
},
{
'id': 'plp_bowler_080719',
'name': 'Ella Bowler',
'creative': 'plp_bowler',
'position': '04'
},
{
'id': 'plp_satchel_080719',
'name': 'Ella Satchel',
'creative': 'plp_satchel',
'position': '05'
},
{
'id': 'plp_backpacks_080719',
'name': 'Ella Backpacks',
'creative': 'plp_backpacks',
'position': '06'
},
{
'id': 'plp_clutch_080719',
'name': 'Ella Clutch',
'creative': 'plp_clutch',
'position': '07'
}
]
}
}
});            
            
            /*PLP ZAPATOS ELLA*/ 

            break;
            case '/tienda/ver-todas/catst4003463':  
            
dataLayer.push({
'event': 'impresionCampaign',
'ecommerce': {
'promoView': {
'promotions': [ // Array of promoFieldObjects.
{
'id': 'plp_bota_220719',
'name': 'Ella Bota',
'creative': 'plp_bota',
'position': '01'
},
{
'id': 'plp_tacones_220719',
'name': 'Ella Tacones',
'creative': 'plp_tacones',
'position': '02'
},
{
'id': 'plp_plataforma_220719',
'name': 'Ella Plataforma',
'creative': 'plp_plataforma',
'position': '03'
},
{
'id': 'plp_sandalias_220719',
'name': 'Ella Sandalias',
'creative': 'plp_sandalias',
'position': '04'
},
{
'id': 'plp_balerinas_220719',
'name': 'Ella Balerinas',
'creative': 'plp_balerinas',
'position': '05'
},
{
'id': 'plp_sneakers_220719',
'name': 'Ella Sneakers',
'creative': 'plp_sneakers', 
'position': '06'
},
{
'id': 'plp_deportivos_220719',
'name': 'Ella Deportivos',
'creative': 'plp_deportivos', 
'position': '07'
}
]
}
}
});            
            
            
          
            
      
            
            
        
        }
    }// JavaScript Document
