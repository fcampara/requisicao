(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"9rSW":function(a,e,t){"use strict";t.r(e);var o=function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("q-page",{staticClass:"print-hide",attrs:{padding:""}},[o("q-btn",{attrs:{color:"primary",label:"Close"},on:{click:function(e){a.print()}}}),a._v(" "),o("q-field",{attrs:{label:"Exmo. Sr","label-width":4}},[o("q-input",{attrs:{value:""},model:{value:a.diretor_nome,callback:function(e){a.diretor_nome=e},expression:"diretor_nome"}})],1),a._v(" "),o("q-field",{attrs:{label:"Diretor da Faculdade de","label-width":4}},[o("q-search",{attrs:{color:"secondary"},model:{value:a.diretor_curso,callback:function(e){a.diretor_curso=e},expression:"diretor_curso"}},[o("q-autocomplete",{attrs:{"static-data":{field:"value",list:a.list_cursos}}})],1)],1),a._v(" "),o("q-field",{attrs:{label:"Protocolo Nº","label-width":4}},[o("q-input",{attrs:{value:""},model:{value:a.protocolo_n,callback:function(e){a.protocolo_n=e},expression:"protocolo_n"}})],1),a._v(" "),o("q-field",{attrs:{label:"Nome","label-width":4}},[o("q-input",{attrs:{value:""},model:{value:a.aluno_nome,callback:function(e){a.aluno_nome=e},expression:"aluno_nome"}})],1),a._v(" "),o("q-field",{attrs:{label:"RGM","label-width":4}},[o("q-input",{attrs:{value:""},model:{value:a.rgm,callback:function(e){a.rgm=e},expression:"rgm"}})],1),a._v(" "),o("q-field",{attrs:{label:"Aluno(a) Matriculado(a) no","label-width":4},model:{value:a.aluno_ano_letivo,callback:function(e){a.aluno_ano_letivo=e},expression:"aluno_ano_letivo"}},[o("q-input",{attrs:{value:""}})],1),a._v(" "),o("q-field",{attrs:{label:"Diretor da Faculdade de","label-width":4}},[o("q-search",{attrs:{color:"secondary"},model:{value:a.aluno_curso,callback:function(e){a.aluno_curso=e},expression:"aluno_curso"}},[o("q-autocomplete",{attrs:{"static-data":{field:"value",list:a.list_cursos}}})],1)],1),a._v(" "),o("q-field",{attrs:{label:"Respeitosamente requer","label-width":4}},[o("q-input",{attrs:{value:"",type:"textarea"},model:{value:a.requerimento,callback:function(e){a.requerimento=e},expression:"requerimento"}})],1),a._v(" "),o("q-field",{attrs:{label:"Recebi um requerimento do(a) Sr.(a)","label-width":4,count:1122}},[o("q-input",{attrs:{value:"",type:"textarea"},model:{value:a.recebi_de,callback:function(e){a.recebi_de=e},expression:"recebi_de"}})],1),a._v(" "),o("q-field",{attrs:{icon:"access_time",label:"Meeting time",helper:"Pick a date","label-width":4}},[o("q-datetime",{attrs:{format:"DD/MM/YYYY",type:"date",color:"secondary","float-label":"Datetime"},model:{value:a.data_assinatura,callback:function(e){a.data_assinatura=e},expression:"data_assinatura"}})],1),a._v(" "),o("q-field",{attrs:{icon:"access_time",label:"Meeting time",helper:"Pick a date","label-width":4}},[o("q-datetime",{attrs:{format:"DD/MM/YYYY",type:"date",color:"secondary","float-label":"Datetime"},model:{value:a.data_retirada,callback:function(e){a.data_retirada=e},expression:"data_retirada"}})],1),a._v(" "),o("q-modal",{attrs:{maximized:"","content-css":{padding:"50px"}},model:{value:a.maximizedModal,callback:function(e){a.maximizedModal=e},expression:"maximizedModal"}},[o("div",{staticClass:"doc-container page"},[o("div",{staticClass:"column"},[o("div",{staticClass:"col-auto flex flex-center"},[o("img",{attrs:{alt:"Quasar logo",height:"79",width:"150",src:t("aHPi")}}),a._v(" "),o("h6",{staticClass:"text-weight-bold",staticStyle:{"margin-top":"0px"}},[a._v("\n            Centro Universitário da Grande de Dourados - Ensino a distância\n          ")])]),a._v(" "),o("div",{staticClass:"column first-text"},[o("div",[o("span",{staticClass:"text-weight-bold"},[a._v("Exmo. Sr.")]),a._v(" "+a._s(a.diretor_nome))]),a._v(" "),o("div",{staticClass:"row justify-between margin-bottom-10"},[o("div",[o("span",{staticClass:"text-weight-bold"},[a._v("Diretor da Faculdade de ")]),a._v(a._s(a.diretor_curso))]),a._v(" "),o("div",[o("span",{staticClass:"text-weight-bold"},[a._v("Protocolo Nº. ")]),a._v(a._s(a.protocolo_n))])]),a._v(" "),o("div",{staticClass:"row justify-between"},[o("div",[o("span",{staticClass:"text-weight-bold"},[a._v("Nome: ")]),a._v(a._s(a.aluno_nome))]),a._v(" "),o("div",[o("span",{staticClass:"text-weight-bold"},[a._v("RGM: ")]),a._v(a._s(a.rgm))])]),a._v(" "),o("div",[o("span",{staticClass:"text-weight-bold "},[a._v("aluno(a) matrículado(a) no ")]),a._v(a._s(a.aluno_ano_letivo))]),a._v(" "),o("p",[o("span",{staticClass:"text-weight-bold"},[a._v("letivo do curso de")]),a._v(" "+a._s(a.aluno_curso)+" ")]),a._v(" "),o("p",[o("span",{staticClass:"text-weight-bold"},[a._v("respeitosamente requer")]),a._v(" "+a._s(a.requerimento))])]),a._v(" "),o("div",{staticClass:"column items-end"},[o("div",{staticClass:"second-text"},[o("p",{staticClass:"margin-bottom-0"},[o("span",{staticClass:"text-weight-bold"},[a._v("Nestes termos")])]),a._v(" "),o("p",[o("span",{staticClass:"text-weight-bold"},[a._v("P. Deferimento")])]),a._v(" "),o("p",{staticClass:"margin-bottom-30"},[o("span",{staticClass:"text-weight-bold"},[a._v("Dourados, 25 de maio de 2018")])]),a._v(" "),o("hr",{staticClass:"signature"}),a._v(" "),o("p",[o("span",{staticClass:"text-weight-bold "},[a._v("ASSINATURA DO ALUNO(A)")])])])]),a._v(" "),o("div",[o("hr",{staticClass:"divider"}),a._v(" "),o("div",{staticClass:"thirt-text"},[o("div",{staticClass:"margin-bottom-10"},[o("span",{staticClass:"text-weight-bold"},[a._v("Recebi um requerimento do(a) Sr.(a) ")]),a._v(a._s(a.aluno_nome))]),a._v(" "),o("div",{staticClass:"margin-bottom-10"},[o("span",{staticClass:"text-weight-bold"},[a._v("Protocolo Nº. ")]),a._v(a._s(a.protocolo_n))]),a._v(" "),o("p",[o("span",{staticClass:"q-body-2"},[o("span",{staticClass:"text-weight-bold"},[a._v("ATENÇÃO:")]),a._v(" O documento requerido deverá ser retirado do guichê de informações no dia 25/05/2018")])]),a._v(" "),o("div",{staticClass:"row items-center"},[o("div",{staticClass:"col text-center"},[o("hr",{staticClass:"signature"}),a._v(" "),o("p",[o("span",{staticClass:"text-weight-bold "},[a._v("Responsável")])])]),a._v(" "),o("div",{staticClass:"col padding-left-200"},[a._v("\n                  Data 25/05/2018\n                ")])])])])])])])],1)},l=[];o._withStripped=!0;var i=t("vodP");console.log(i);var s={data:function(){return{list_cursos:i,diretor_nome:"",diretor_curso:"",protocolo_n:"",aluno_nome:"",rgm:"",aluno_ano_letivo:"",aluno_curso:"",requerimento:"",hoje:Date.now(),recebi_de:"",data_assinatura:"",data_retirada:Date.now(),maximizedModal:!1}},methods:{print:function(){console.log(this.data_retirada),console.log(this.lang);var a=this;a.maximizedModal=!0,setTimeout(function(){window.print(),a.maximizedModal=!1},1e3)}}},r=s,n=t("KHd+"),d=Object(n["a"])(r,o,l,!1,null,null,null);e["default"]=d.exports},aHPi:function(a,e,t){a.exports=t.p+"img/unigranet.d542f3a.png"},vodP:function(a){a.exports=[{label:"Administração",value:"Administração"},{label:"Agronegócios",value:"Agronegócios"},{label:"Análise e Desenvolvimento de Sistemas",value:"Análise e Desenvolvimento de Sistemas"},{label:"Ciências Contábeis",value:"Ciências Contábeis"},{label:"Design de Interiores",value:"Design de Interiores"},{label:"Engenharia de Produção",value:"Engenharia de Produção"},{label:"Engenharia de Software",value:"Engenharia de Software"},{label:"Geografia",value:"Geografia"},{label:"Gestão Comercial",value:"Gestão Comercial"},{label:"Gestão de Recursos Humanos",value:"Gestão de Recursos Humanos"},{label:"Gestão de Turismo",value:"Gestão de Turismo"},{label:"História",value:"História"},{label:"Letras (Português/Inglês)",value:"Letras (Português/Inglês)"},{label:"Letras (Português/Literatura)",value:"Letras (Português/Inglês)"},{label:"Logística",value:"Logística"},{label:"Marketing",value:"Marketing"},{label:"Matemática",value:"Matemática"},{label:"Negócios Imobiliários",value:"Negócios Imobiliários"},{label:"Pedagogia",value:"Pedagogia"},{label:"Processos Gerencias",value:"Processos Gerencias"},{label:"Produção Publicitária",value:"Produção Publicitária"},{label:"Segunda Graduação em Pedagogia",value:"Segunda Graduação em Pedagogia"},{label:"Segunda Licenciatura em Pedagogia",value:"Segunda Licenciatura em Pedagogia"},{label:"Serviço Social",value:"Serviço Social"},{label:"Serviços Jurídicos",value:"Serviço Social"},{label:"Teologia",value:"Teologia"}]}}]);