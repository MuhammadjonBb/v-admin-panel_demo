<template>
  <q-layout>
    <q-page class="q-pa-md main__container">
      <h1 class="text-h5 text-weight-bold">{{ $route.path.includes('add') ? $t('categories.form.addTitle') :
        $t('categories.form.editTitle') }}</h1>

      <q-card flat>
        <q-card-section>
          <q-list>
            <q-expansion-item class="q-mb-md" expand-separator :disable-hover="true" label="Русский"
              header-style="color: #2B3D90" header-class="text-bold text-h6 item-no-hover" default-opened>
              <q-card>
                <q-card-section class="row no-wrap" style="gap: 20px;">
                  <DefaultInput :rules="[(v: any) => !!v || $t('validation.required')]" name="ruName"
                    v-model:text="categoryName.ru" :label="$t('categories.form.inputs.categoryName')"
                    :placeholder="$t('categories.form.inputs.typeName')" />

                  <div style="min-width: 65%;" @mouseover="setVisibleSubcategoryInput('ru')"
                    @mouseleave="setInvisibleSubcategoryInput('ru')">
                    {{ $t('categories.form.inputs.subCategory') }}
                    <div class="full-width q-px-sm subcategory-wrapper">

                      <q-chip v-for="(item, index) in subCategoriesArr.ru" :key="index"
                        style="margin-top: 12px; background-color: #9CDAFF;" square text-color="dark"
                        class="justify-center" removable v-model="subCategoriesArr.ru[subCategoriesArr.ru.indexOf(item)]"
                        icon-remove="close">
                        {{ item }}
                      </q-chip>

                      <q-input v-show="isSubcategoryVisible.ru"
                        :placeholder="$t('categories.form.inputs.typeSubCategory')" borderless dense
                        style="padding-top: 2px;" class="q-mt-xs subcategory-input full-width"
                        v-model="subCategoryInputValue" @keydown.enter="addSubCategory(subCategoryInputValue, 'ru')" />
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-expansion-item class="q-mb-md" expand-separator :disable-hover="true" label="English"
              header-style="color: #2B3D90" header-class="text-bold text-h6 item-no-hover" default-opened>
              <q-card>
                <q-card-section class="row no-wrap" style="gap: 20px;">
                  <DefaultInput :rules="[(v: any) => !!v || $t('validation.required')]" name="enName"
                    v-model:text="categoryName.en" :label="$t('categories.form.inputs.categoryName')"
                    :placeholder="$t('categories.form.inputs.typeName')" />

                  <div style="min-width: 65%;" @mouseover="setVisibleSubcategoryInput('en')"
                    @mouseleave="setInvisibleSubcategoryInput('en')">
                    {{ $t('categories.form.inputs.subCategory') }}
                    <div class="full-width q-px-sm subcategory-wrapper">

                      <q-chip v-for="(item, index) in subCategoriesArr.en" :key="index"
                        style="margin-top: 12px; background-color: #9CDAFF;" square text-color="dark"
                        class="justify-center" removable v-model="subCategoriesArr.en[subCategoriesArr.en.indexOf(item)]"
                        icon-remove="close">
                        {{ item }}
                      </q-chip>

                      <q-input v-show="isSubcategoryVisible.en"
                        :placeholder="$t('categories.form.inputs.typeSubCategory')" borderless dense
                        style="padding-top: 2px;" class="q-mt-xs subcategory-input full-width"
                        v-model="subCategoryInputValue" @keydown.enter="addSubCategory(subCategoryInputValue, 'en')" />
                    </div>

                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-expansion-item class="q-mb-md" expand-separator :disable-hover="true" label="O’zbekcha"
              header-style="color: #2B3D90" header-class="text-bold text-h6 item-no-hover" default-opened>
              <q-card>
                <q-card-section class="row no-wrap" style="gap: 20px;">
                  <DefaultInput :rules="[(v: any) => !!v || $t('validation.required')]" name="uzName"
                    v-model:text="categoryName.uz" :label="$t('categories.form.inputs.categoryName')"
                    :placeholder="$t('categories.form.inputs.typeName')" />

                  <div style="min-width: 65%;" @mouseover="setVisibleSubcategoryInput('uz')"
                    @mouseleave="setInvisibleSubcategoryInput('uz')">
                    {{ $t('categories.form.inputs.subCategory') }}
                    <div class="full-width q-px-sm subcategory-wrapper">

                      <q-chip v-for="(item, index) in subCategoriesArr.uz" :key="index"
                        style="margin-top: 12px; background-color: #9CDAFF;" square text-color="dark"
                        class="justify-center" removable v-model="subCategoriesArr.uz[subCategoriesArr.uz.indexOf(item)]"
                        icon-remove="close">
                        {{ item }}
                      </q-chip>

                      <q-input v-show="isSubcategoryVisible.uz"
                        :placeholder="$t('categories.form.inputs.typeSubCategory')" borderless dense
                        style="padding-top: 2px;" class="q-mt-xs subcategory-input full-width"
                        v-model="subCategoryInputValue" @keydown.enter="addSubCategory(subCategoryInputValue, 'uz')" />
                    </div>
                  </div>

                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
          <div class="row q-mt-lg no-wrap  q-mx-auto" style="width: 60%;gap: 20px;">
            <q-space />
            <q-btn color="indigo-10" flat :label="$t('btn.cancel')" style="border-radius: 12px;"
              class="full-width q-py-sm bg-grey-2  q-px-xl q-mr-md" no-caps />
            <q-btn @click="save" color="white" flat :label="$t('btn.save')" style="border-radius: 12px;"
              class="full-width q-py-sm  q-px-xl bg-indigo-10" no-caps />
          </div>
        </q-card-section>
      </q-card>
    </q-page>
  </q-layout>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import DefaultInput from 'src/components/input/DefaultInput.vue'
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
const $q = useQuasar()
const subCategoriesArr: any = ref({
  ru: [],
  uz: [],
  en: []
})

const isSubcategoryVisible: any = ref({
  uz: false,
  en: false,
  ru: false
})

const subCategoryInputValue = ref('')

const categoryName = ref({
  ru: '',
  uz: '',
  en: ''
})

function addSubCategory(value: string, lang: string) {
  if (subCategoryInputValue.value.trim() !== '') {
    subCategoriesArr.value[lang].push(value.trim())
    subCategoryInputValue.value = ''
  }
}

function setVisibleSubcategoryInput(lang: string) {
  isSubcategoryVisible.value[lang] = true
}

function setInvisibleSubcategoryInput(lang: string) {
  if (subCategoryInputValue.value.trim() === '') {
    isSubcategoryVisible.value[lang] = false
  }
}

function save() {
  if ((subCategoriesArr.value.ru.length === subCategoriesArr.value.uz.length && subCategoriesArr.value.ru.length === subCategoriesArr.value.en.length) && (categoryName.value.ru !== '' && categoryName.value.uz !== '' && categoryName.value.en !== '')) {
    clearValues()
    $q.notify({
      message: t('notification.categories.created'),
      color: 'positive'
    })
  } else {
    $q.notify({
      message: t('notification.categories.equalError'),
      color: 'negative',
      position: 'top-right'
    })
  }
}

function clearValues() {
  categoryName.value.ru = ''
  categoryName.value.uz = ''
  categoryName.value.en = ''
  subCategoriesArr.value = {
    ru: [],
    uz: [],
    en: []
  }
}
</script>


<style lang="scss">
.q-item.item-no-hover:hover .q-focus-helper {
  background: white !important;
}

.subcategory-input {
  padding: 0 10px;
}

.subcategory-wrapper {
  margin-top: 8px;
  border: 1px solid #E3E5E5;
  height: 60px;
  margin-top: 8px;
  padding: 3px 20px 6px 20px;
  display: flex;
  align-self: center;
  border-radius: 12px;
}
</style>
