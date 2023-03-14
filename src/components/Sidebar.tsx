import { useState } from 'react'
import { sidebarMenu } from '../data'
import { BsChevronDown } from 'react-icons/bs'
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const toggleSubmenu = (item: any) => {
    if (!item.subMenus) return
    setIsSubmenuOpen(!isSubmenuOpen)
  }
  return (
    <div className='h-screen flex items-end justify-end'>
      <button
        className='fixed lg:hidden z-50 bottom-10 right-10 bg-indigo-800 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-indigo-500 duration-300'
        onClick={toggle}
      >
        <span className='text-white rotate-90'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            className='w-6 m-auto'
            viewBox='0 0 16 16'
          >
            <path
              fill-rule='evenodd'
              d='M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z'
            />
          </svg>
        </span>
      </button>
      <div
        className={`${
          isOpen ? 'w-48' : 'w-0'
        } lg:w-72 bg-indigo-800 h-screen relative duration-500`}
      >
        <div className='text-center mt-2'>
          <h1 className='text-white font-semibold text-2xl '>Sidebar</h1>
        </div>
        <ul className='pt-5'>
          {sidebarMenu.map((menu, index) => (
            <>
              <li
                onClick={() => toggleSubmenu(menu)}
                key={index}
                className={`flex rounded-md p-2 cursor-pointer hover:bg-indigo-600 text-white text-sm items-center gap-x-4 ${
                  menu.gap ? 'mt-9' : 'mt-2'
                }`}
              >
                {menu.icon} <span className='flex-1'>{menu.title}</span>
                {menu.subMenus && (
                  <BsChevronDown
                    className={`${isSubmenuOpen && 'rotate-180'}`}
                  />
                )}
              </li>
              {menu.subMenus && isOpen && isSubmenuOpen && (
                <ul>
                  {menu.subMenus.map((subMenu, i) => (
                    <li
                      key={i}
                      className='flex px-5 cursor-pointer text-center text-sm text-gray-200 py-1'
                    >
                      {subMenu.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
