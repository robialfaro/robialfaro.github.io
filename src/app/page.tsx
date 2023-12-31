import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className='lg:flex lg:justify-between lg:gap-4'>
        <header id='page-header' className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'>
          <div>
            <div className='flex items-center gap-3 lg:gap-4'>
              <div>
                <Link href='/'>
                    <Image
                      src='/profile-photo.jpeg'
                      alt='Robi Alfaro Logo'
                      width={100}
                      height={100}
                      className='rounded-full border border-slate-300'
                    />
                </Link>
              </div>
              <div>
                <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'><Link href="/">Robi Alfaro</Link></h1>
                <h2 className='mt-3 text-lg font-medium tracking-tight sm:text-xl'>Frontend Developer</h2>
              </div>
            </div>
            <p className='ml-1 mt-6 lg:max-w-sm leading-normal'>Magister en Docencia Universitaria. Ingeniero de Sistemas. Frontend Developer. Microsoft Office Especialist. Consultor en Tecnologías de la Información y Comunicaciones.</p>
          </div>
          <ul className='ml-1 mt-8 flex items-center'>
            <li className='mr-5 text-xs'><Link href="#">LinkedIn</Link></li>
            <li className='mr-5 text-xs'><Link href="#">Instagram</Link></li>
            <li className='mr-5 text-xs'><Link href="#">GitHub</Link></li>
          </ul>
        </header>
        <main id='page-content' className='pt-24 lg:w-1/2 lg:py-24'>
          <section id='about' className='mb-8 scroll-mt-8 md:mb-12 lg:mb-18 lg:scroll-mt-12'>
            <h2 className='mb-5'>Acerca de mi</h2>
            <p className='mb-4'>Tengo experiencia profesional que abarca más de 6 años en el desarrollo de aplicaciones web, he trabajado con diversas herramientas como React, Laravel, Wordpress, entre otras. Durante este periodo, he adquirido habilidades significativas en la creación y optimización de soluciones digitales, permitiéndome contribuir de manera efectiva al diseño y ejecución de proyectos web innovadores.</p>
            <p>Cuando no estoy frente a la computadora, suelo disfrutar de actividades como el fútbol, compartir momentos con amigos o familiares.</p>
          </section>
          <section className='mb-8 scroll-mt-8 md:mb-12 lg:mb-18 lg:scroll-mt-12'>
            <h2 className='mb-5'>Services</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eos saepe! Iste sed corrupti perspiciatis sapiente nostrum molestiae cupiditate ad harum magni quia, molestias rem minus porro, suscipit cumque expedita.</p>
          </section>
          <section>
            <h2 className='mb-5'>Contact me</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aliquam quo, ad ut consectetur cum earum quidem ab laudantium, suscipit doloribus. Recusandae impedit saepe unde facere adipisci sit ut ullam?</p>
          </section>
        </main>
      </div>
    </div>
  )
}
