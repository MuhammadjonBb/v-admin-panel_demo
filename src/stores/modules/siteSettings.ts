import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
import { useInputStore } from './input'
import { Notify } from 'quasar'
import { getPrefix, removeCharacters } from 'src/helpers/formatPhoneNum'

const inputStore = useInputStore()

export const useSiteSettingsStore: any = defineStore('siteSettings', {
  state: () => ({
    siteInfo: null,
    socialNetworks: [
      {
        name: 'Facebook',
        link: 'https://www.facebook.com/intex',
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/intex/',
      },
      {
        name: 'Twitter',
        link: 'https://twitter.com/intex',
      },
      {
        name: 'Telegram',
        link: 'https://t.me/intex',
      }
    ],
    langStatus: {
      lang_ru: false,
      lang_uz: false,
      lang_en: false
    },
    contacts: {
      address: "Улица Пахлавона Махмуда, Яшнабадский район, город Ташкент",
      phone: "+998 (90) 128 81 82",
      email: "intex@gmail.com",
      schedule: "10:00 - 22:00 Без выходных"
    }
  }),

  actions: {
    getSiteInfo() {
      return api.get('sites')
        .then(r => {
          this.siteInfo = r.data[0]
        }).catch(e => {
          console.log(e)
        })
    },
    updateSiteInfo(formData) {
      const data = {
        id: 1,
        ...formData,
        ...this.langStatus
      }
      data.phone = removeCharacters(data.phone)
      return api.put('sites', data)
    },
    getSocialNetworks() {
      return api.get('social-networks')
        .then(r => {
          return this.socialNetworks = r.data
        })
    },
    deleteSocialNetwork(id: number) {
      return api.delete(`social-networks/${id}`)
        .then(r => {
          this.getSocialNetworks()
        })
    },
    siteLangUpdate(lang_name: string, status: boolean) {
      return api.put('sites/siteLangUpdate', {
        lang_name,
        status
      })
    },
    updateDefaultLang(lang_name: string) {
      return api.put('sites/defaultLang', { lang_name })
    },
    createSocialNetwork(data: object) {
      return api.post('social-networks', data).then(r => {
        this.getSocialNetworks()
      })
    },
    updateSocialNetwork(data: any) {
      return api.put('social-networks', data).then(r => {
        this.getSocialNetworks()
      })
    }
  },
})

