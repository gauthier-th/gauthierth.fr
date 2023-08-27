import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDown } from 'react-feather'

type Langs = { [key: string]: { name: string; icon: JSX.Element } }
const langs: Langs = {
  de: {
    name: 'Deutsch',
    icon: <img src="https://twemoji.maxcdn.com/svg/1f1e9-1f1ea.svg" className="w-5 h-5" />
  },
  en: {
    name: 'English',
    icon: <img src="https://twemoji.maxcdn.com/svg/1f1ec-1f1e7.svg" className="w-5 h-5" />
  },
  fr: {
    name: 'French',
    icon: <img src="https://twemoji.maxcdn.com/svg/1f1eb-1f1f7.svg" className="w-5 h-5" />
  }
}

const LangButton = () => {
  const router = useRouter()
  const locale = router.locale || router.defaultLocale || 'en'
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left" style={{ width: '4.8rem' }}>
        {({ open }) => (
          <>
            <div>
              <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                {langs[locale].icon}
                <ChevronDown
                  className="w-5 h-5 ml-2 -mr-1 text-purple-200 hover:text-purple-100"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="absolute right-0 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                style={{ width: '4.8rem' }}
              >
                <div className="px-1 py-1 ">
                  {Object.keys(langs).map(lang => (
                    <Menu.Item key={lang}>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-purple-500 text-white" : "text-gray-900"
                          } group flex rounded-md justify-center items-center w-full px-3 py-2 text-sm`}
                          onClick={() => router.push(router.pathname, router.pathname, { locale: lang })}
                        >
                          {langs[lang].icon}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  )
}

export default LangButton