export const Popular = () => {
    return (
        <div className={'px-[4.25rem] flex flex-col bg-white'}>
            <h3 className={'pb-[2.81rem] text-[2.8125rem] font-medium'}>Популярное</h3>
            <div className={'grid grid-cols-4 gap-[1rem]'}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((it, idx) =>
                    <div className={'flex flex-col'}>
                        <img src={'rect1.svg'} className={'w-[250px] rounded-[2.5rem] h-[350px]'}/>
                        <div className={'flex flex-col items-start'}>
                            <h3 className={'text-[1.875rem]'}>Кроссовки</h3>
                            <p className={'text-[1.5625rem] text-[#828282]'}>Nike</p>
                            <p className={'text-[1.875rem]'}>3500 ₽</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}