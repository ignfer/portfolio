export default function AboutMeHeader() {
  return (
    <section className='w-full p-4 text-[var(--dark-color-2)] flex items-center justify-between border-b-2 border-solid border-[var(--dark-color-1)]'>
      <p
        className={'font-bold text-xl'}
        data-animation={'highlightable'}>
        About me:
      </p>
    </section>
  );
}