<template>
  <q-table dense table-class="q-mx-none" flat :pagination="{ rowsPerPage: 10 }"
    table-header-style="font-weight: 500;font-size: 14px; background-color: #f2f2f2;"
    table-header-class="text-grey-7 q-pa-none" :rows="data" row-key="id" v-model:selected="selected" selection="multiple"
    :columns="[
      {
        name: 'id',
        label: 'ID',
        field: 'id',
        sortable: true,
        headerStyle: 'background-color: #f2f2f2;',
        align: 'left'
      },
      {
        name: 'name',
        label: `${$t('categories.table.tableHead.categoryName')}`,
        field: 'name',
        sortable: true,
        headerStyle: 'background-color: #f2f2f2;',
        align: 'left'
      },
      {
        name: 'subcategory_amount',
        label: `${$t('categories.table.tableHead.subCategoryAmount')}`,
        field: 'subcategory_amount',
        sortable: true,
        headerStyle: 'background-color: #f2f2f2;',
        align: 'left',
      },
      {
        name: 'subcategories',
        label: `${$t('categories.table.tableHead.subCategories')}`,
        field: 'subcategories',
        sortable: true,
        headerStyle: 'background-color: #f2f2f2;',
        align: 'left'
      },
      {
        name: 'actions',
        label: '',
        field: 'actions',
        headerStyle: 'background-color: #f2f2f2;',
        align: 'right'
      }
    ]">

    <!-- TOP-SELECT -->
    <template #top>
      <q-tr class="item-center">
        <q-checkbox v-model:model-value="allSelect" />
        <span class="text-grey-5" style="font-weight: 500;">{{ selected.length }}, {{ $t('table.choose') }}</span>
        <q-btn text-color="grey-5" icon="delete" flat round @click="clearSelections" />
      </q-tr>
    </template>
    <!-- TOP-SELECT -->

    <!-- HEADER -->
    <template #header-cell-id="props">
      <q-th class="text-left" style="background-color: #f2f2f2;" :props="props">
        {{ props.col.label }}
        <q-icon name="filter_list" size="sm" color="indigo-10" />
      </q-th>
    </template>

    <template #header-cell-name="props">
      <q-th class="text-left" style="background-color: #f2f2f2;" :props="props">
        {{ props.col.label }}
        <q-icon name="filter_list" size="sm" color="indigo-10" />
      </q-th>
    </template>

    <template #header-cell-subcategory_amount="props">
      <q-th class="text-left" style="background-color: #f2f2f2;" :props="props">
        {{ props.col.label }}
        <q-icon name="filter_list" size="sm" color="indigo-10" />
      </q-th>
    </template>

    <template #header-cell-subcategories="props">
      <q-th class="text-left" style="background-color: #f2f2f2;" :props="props">
        {{ props.col.label }}
        <q-icon name="filter_list" size="sm" color="indigo-10" />
      </q-th>
    </template>


    <template #header-cell-actions>
      <q-th class="text-right" style="background-color: #f2f2f2;">
        <q-icon name="more_vert" size="sm" color="dark" class="q-mr-xs" />
      </q-th>
    </template>
    <!-- HEADER -->

    <!-- BODY  -->

    <!-- SUB_CATEGORIES -->
    <template #body-cell-subcategories="props">
      <q-td :props="props">
        <q-chip v-for="(item, index) in props.row.subcategories" :key="index" style="background-color: #9CDAFF;" square
          text-color="dark" class="justify-center">
          {{ item }}
        </q-chip>

      </q-td>
    </template>
    <!-- SUB_CATEGORIES -->

    <!-- BODY  -->

    <!-- ACTIONS -->
    <template #body-cell-actions="props">
      <q-td :props="props">
        <q-btn flat icon="more_vert" rounded dense />
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item v-close-popup>
              <q-item-section>
                <q-btn dense flat class="text-capitalize text-left" text-color="grey-8" @click="toEditPage">
                  <q-icon size="xs" name="edit" color="positive" class="on-left" />
                  Изменить
                </q-btn>
              </q-item-section>
            </q-item>
            <q-item v-close-popup>
              <q-item-section>
                <q-btn dense flat class="text-capitalize text-left" text-color="grey-8">
                  <q-icon name="content_copy" size="xs" color="primary" class="on-left" />
                  Дублировать
                </q-btn>
              </q-item-section>
            </q-item>
            <q-item v-close-popup>
              <q-item-section>
                <q-btn @click="deleteCategory(props.row.id)" dense flat class="text-capitalize text-left"
                  text-color="grey-8">
                  <q-icon name="delete" size="xs" color="negative" class="on-left" />
                  Удалить
                </q-btn>
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-td>
    </template>
    <!-- ACTIONS -->

    <!-- SELECTION -->
    <template #header-selection="props">
      <q-checkbox v-model="props.selected" />
    </template>

    <template #body-selection="props">
      <q-checkbox v-model="props.selected" />
    </template>
    <!--SELECTION -->

    <!-- PAGINATION -->
    <template #bottom="scope">
      <div class="row items-center q-pa-sm full-width">

        <div class="row items-center q-mr-md">
          <q-select dropdown-icon="expand_more" borderless dense v-model="scope.pagination.rowsPerPage"
            :options="[5, 10, 20, 50]" emit-value class="q-mr-sm q-pl-md q-pr-sm bg-grey-3"
            style="border-radius: 12px;" />
          <span class="text-grey-7" style="font-size: 15px;"> {{ $t('table.elmPerPage') }}</span>
        </div>

        <div class="text-grey-8" style="font-size: 15px;">
          {{ scope.pagination.rowsPerPage * scope.pagination.page - scope.pagination.rowsPerPage == 0 ? 1 :
            scope.pagination.rowsPerPage * scope.pagination.page - scope.pagination.rowsPerPage }} -
          {{ scope.pagination.rowsPerPage * scope.pagination.page }} {{ $t('table.from') }}
          {{ 1 }} {{ $t('table.items') }}
        </div>

        <q-space />

        <div class="row items-center">
          <q-select dropdown-icon="expand_more" borderless dense v-model="scope.pagination.page"
            :options="getPageNums(scope.pagesNumber)" emit-value class="q-mr-sm q-pl-md q-pr-sm bg-grey-3"
            style="border-radius: 12px;" />
          <span class="text-grey-7" style="font-size: 15px;"> {{ $t('table.from') }} {{ scope.pagesNumber }}
            {{ $t('table.pages') }}</span>
        </div>

        <div class="row items-center">
          <q-pagination dense v-model="scope.pagination.page" :min="1" no-number :max="scope.pagesNumber" direction-links
            color="grey" />
        </div>
      </div>
    </template>
    <!-- PAGINATION -->
  </q-table>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCategoriesStore } from 'src/stores/modules/products/categories';
import { Notify } from 'quasar';
import { useI18n } from 'vue-i18n';


interface ISelected {
  id: number
  category: string
  amount: number
  subcategories: string[]
}
const categoriesStore = useCategoriesStore()
const { t } = useI18n()
const router = useRouter()
const selected: Ref<ISelected[]> = ref([])
const allSelect: Ref<boolean> = ref(false)
const { data } = defineProps(['data'])

// eslint-disable-next-line space-before-function-paren
function getPageNums(n: number) {
  const numsArr: number[] = []
  for (let i = 1; i <= n; i++) {
    numsArr.push(i)
  }
  return numsArr
}

// eslint-disable-next-line space-before-function-paren
function toEditPage() {
  router.push('categories/edit')
}

// eslint-disable-next-line space-before-function-paren
function clearSelections() {
  selected.value.splice(0)
}

function deleteCategory(id: number) {
  setTimeout(() => {
    Notify.create({
      type: 'negative',
      position: 'top-right',
      message: t('notification.categories.deleted'),
    })
  }, 1000)
}
</script>
