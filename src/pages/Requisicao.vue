<template>
  <q-page padding class="print-hide">
    <q-btn color="primary" icon="print" class="absolute-top-right" @click="print()" label="Imprimir" />
    <q-btn color="warning" icon="clear" class="absolute-top-left" @click="clear()" label="Limpar" />
    <q-field label="Tipo de requisição" class="q-mt-xl" :label-width="4">
      <q-select filter v-model="type_document" :options="list_tabela"/>
    </q-field>
    <q-field label="Exmo. Sr(a)" class="q-mt-sm" :label-width="4">
      <q-input v-model="diretor_nome" value='' />
    </q-field>
    <q-field label="Diretor da Faculdade de" class="q-mt-sm" :label-width="4">
      <q-search color="secondary" v-model="diretor_curso">
        <q-autocomplete
          :static-data="{field: 'value', list: list_cursos}"
        />
      </q-search>
    </q-field>
    <q-field label="Protocolo Nº" class="q-mt-sm" :label-width="4">
      <q-input v-model="protocolo_n" value='' />
    </q-field>
    <q-field label="Nome" class="q-mt-sm" :label-width="4">
      <q-input v-model="aluno_nome" value='' />
    </q-field>
    <q-field label="RGM" class="q-mt-sm" :label-width="4">
      <q-input v-model="rgm" value='' />
    </q-field>
    <q-field label="aluno(a) matriculado(a) no " class="q-mt-sm" :label-width="4">
      <q-search color="secondary" v-model="aluno_ano_letivo">
        <q-autocomplete
          :static-data="{field: 'value', list: list_semestre}"
        />
      </q-search>
    </q-field>
    <q-field label="letivo do curso de" class="q-mt-sm" :label-width="4">
      <q-search color="secondary" v-model="aluno_curso">
        <q-autocomplete
          :static-data="{field: 'value', list: list_cursos}"
        />
      </q-search>
    </q-field>
    <q-field label="Respeitosamente requer" class="q-mt-sm" :label-width="4" :count="1122">
      <q-input v-model="requerimento" value='' type="textarea" />
    </q-field>
    <q-field label="Recebi um requerimento do(a) Sr.(a)" class="q-mt-sm" :label-width="4">
      <q-input v-model="recebi_de" value=''/>
    </q-field>
    <q-modal v-model="maximizedModal" maximized :content-css="{padding: '50px'}">
      <div class="doc-container page">
        <div class="column">
          <div class="col-auto flex flex-center">
            <img alt="Quasar logo" height="79" width="150" src="~assets/unigranet.png">
            <h6 style="margin-top: 0px;" class="text-weight-bold">
              Centro Universitário da Grande de Dourados - Ensino a distância
            </h6>
          </div>
          <div class="column first-text">
            <div><span class="text-weight-bold">Exmo. Sr.</span> {{diretor_nome}}</div>
            <div class="row justify-between margin-bottom-10">
              <div><span class="text-weight-bold">Diretor da Faculdade de </span>{{diretor_curso}}</div>
              <div><span class="text-weight-bold">Protocolo Nº. </span>{{protocolo_n}}</div>
            </div>
            <div class="row justify-between">
              <div><span class="text-weight-bold">Nome: </span>{{aluno_nome}}</div>
              <div><span class="text-weight-bold">RGM: </span>{{rgm}}</div>
            </div>
            <div><span class="text-weight-bold ">aluno(a) matrículado(a) no </span>{{aluno_ano_letivo}}</div>
            <p> <span class="text-weight-bold">letivo do curso de</span> {{aluno_curso}} </p>
            <p><span class="text-weight-bold">respeitosamente requer</span> {{requerimento}}</p>
          </div>
            <div class="column items-end">
              <div class="second-text">
                <p class="margin-bottom-0">
                  <span class="text-weight-bold">Nestes termos</span>
                </p>
                <p><span class="text-weight-bold">P. Deferimento</span></p>
                <p class="margin-bottom-30"><span class="text-weight-bold">{{fullDate(1)}}</span></p>
                <hr class="signature">
                <p><span class="text-weight-bold ">ASSINATURA DO ALUNO(A)</span></p>
              </div>
            </div>
            <div>
              <hr class="divider">
              <div class="thirt-text">
                <div class="margin-bottom-10"><span class="text-weight-bold">Recebi um requerimento do(a) Sr.(a) </span>{{recebi_de}}</div>
                <div class="margin-bottom-10"><span class="text-weight-bold">Protocolo Nº. </span>{{protocolo_n}}</div>
                <p><span class="q-body-2"><span class="text-weight-bold">ATENÇÃO:</span> O documento requerido deverá ser retirado do guichê de informações daqui 15 dias úteis</span></p>
                <div class="row items-center">
                  <div class="col text-center">
                    <hr class="signature">
                    <p><span class="text-weight-bold ">Responsável</span></p>
                  </div>
                  <div class="col padding-left-200">
                    {{fullDate(2)}}
                  </div>
               </div>
              </div>
            </div>
          </div>
        </div>
    </q-modal>
  </q-page>
</template>

<script>
import semestre from 'assets/list/semestre.json'
import cursos from 'assets/list/cursos.json'
import tabela from 'assets/list/tabela.json'
import month from 'assets/list/month.json'

console.log(tabela)
export default {
  data () {
    return {
      list_semestre: semestre,
      list_tabela: tabela,
      list_cursos: cursos,
      list_month: month,
      type_document: '',
      diretor_nome: '',
      diretor_curso: '',
      protocolo_n: '',
      aluno_nome: '',
      rgm: '',
      aluno_ano_letivo: '',
      aluno_curso: '',
      requerimento: '',
      recebi_de: '',
      maximizedModal: false
    }
  },
  methods: {
    clear () {
      this.diretor_nome = ''
      this.diretor_curso = ''
      this.protocolo_n = ''
      this.aluno_nome = ''
      this.rgm = ''
      this.aluno_ano_letivo = ''
      this.aluno_curso = ''
      this.requerimento = ''
      this.recebi_de = ''
    },
    fullDate (type) {
      const date = new Date()
      return type === 1 ? `Dourados, ${date.getDate()} de ${this.list_month[date.getMonth()]} de ${date.getFullYear()}` : `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    },
    print () {
      console.log(this.type_document)
      const self = this
      self.maximizedModal = true
      setTimeout(function () {
        window.print()
        self.maximizedModal = false
      }, 1000)
    }
  }
}

</script>
