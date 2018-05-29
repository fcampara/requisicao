<template>
  <q-page padding class="print-hide">
    <q-btn color="primary" icon="print" class="absolute-top-right" @click="print()" label="Imprimir" />
    <q-field label="Exmo. Sr(a)" :label-width="4">
      <q-input v-model="diretor_nome" value='' />
    </q-field>
    <q-field label="Diretor da Faculdade de" :label-width="4">
      <q-search color="secondary" v-model="diretor_curso">
        <q-autocomplete
          :static-data="{field: 'value', list: list_cursos}"
        />
      </q-search>
    </q-field>
    <q-field label="Protocolo Nº" :label-width="4">
      <q-input v-model="protocolo_n" value='' />
    </q-field>
    <q-field label="Nome" :label-width="4">
      <q-input v-model="aluno_nome" value='' />
    </q-field>
    <q-field label="RGM" :label-width="4">
      <q-input v-model="rgm" value='' />
    </q-field>
    <q-field v-model="aluno_ano_letivo" label="Aluno(a) Matriculado(a) no" :label-width="4">
      <q-input value='' />
    </q-field>
    <q-field label="Diretor da Faculdade de" :label-width="4">
      <q-search color="secondary" v-model="aluno_curso">
        <q-autocomplete
          :static-data="{field: 'value', list: list_cursos}"
        />
      </q-search>
    </q-field>
    <q-field label="Respeitosamente requer" :label-width="4" :count="1122">
      <q-input v-model="requerimento" value='' type="textarea" />
    </q-field>
    <q-field label="Recebi um requerimento do(a) Sr.(a)" :label-width="4">
      <q-input v-model="recebi_de" value=''/>
    </q-field>
    <q-field icon="access_time" label="Meeting time" helper="Pick a date" :label-width="4">
      <q-datetime format="DD/MM/YYYY" v-model="data_assinatura" type="date" color="secondary" float-label="Datetime" />
    </q-field>
    <q-field icon="access_time" label="Meeting time" helper="Pick a date" :label-width="4">
      <q-datetime format="DD/MM/YYYY" v-model="data_retirada" type="date" color="secondary" float-label="Datetime" />
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
                <p class="margin-bottom-30"><span class="text-weight-bold">{{fullDate()}}</span></p>
                <hr class="signature">
                <p><span class="text-weight-bold ">ASSINATURA DO ALUNO(A)</span></p>
              </div>
            </div>
            <div>
              <hr class="divider">
              <div class="thirt-text">
                <div class="margin-bottom-10"><span class="text-weight-bold">Recebi um requerimento do(a) Sr.(a) </span>{{aluno_nome}}</div>
                <div class="margin-bottom-10"><span class="text-weight-bold">Protocolo Nº. </span>{{protocolo_n}}</div>
                <p><span class="q-body-2"><span class="text-weight-bold">ATENÇÃO:</span> O documento requerido deverá ser retirado do guichê de informações no dia 25/05/2018</span></p>
                <div class="row items-center">
                  <div class="col text-center">
                    <hr class="signature">
                    <p><span class="text-weight-bold ">Responsável</span></p>
                  </div>
                  <div class="col padding-left-200">
                    Data 25/05/2018
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
import cursos from 'assets/list/cursos.json'
import month from 'assets/list/month.json'

console.log(cursos)
export default {
  data () {
    return {
      list_cursos: cursos,
      list_month: month,
      diretor_nome: '',
      diretor_curso: '',
      protocolo_n: '',
      aluno_nome: '',
      rgm: '',
      aluno_ano_letivo: '',
      aluno_curso: '',
      requerimento: '',
      hoje: Date.now(),
      recebi_de: '',
      data_assinatura: '',
      data_retirada: Date.now(),
      maximizedModal: false
    }
  },
  methods: {
    fullDate () {
      const date = new Date()
      return `Dourados, ${date.getDate()} de ${this.list_month[date.getMonth()]} de ${date.getFullYear()}`
    },
    print () {
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
