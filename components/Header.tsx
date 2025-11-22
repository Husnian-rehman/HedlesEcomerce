import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
async function getHeaderData() {
  const query = `*[_type == "header"][0]`
  const data = await client.fetch(query)
  return data
}

export default async function Header() {
  const headerData = await getHeaderData()

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
            {headerData?.logo && (
          <Image
            src={urlFor(headerData.logo).url()}
            alt="Logo"
            width={100}
            height={40}
            className="h-10 w-auto"
          />
        )}
        </Link>
        <nav>
         <ul className="flex gap-5">
            {headerData?.menuItems?.map((item: any, index: number) => (
              <li key={index}>
                <Link
                  href={item?.slug || "#"}
                  className="text-gray-700 text-[18px] font-bold hover:text-gray-900"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
