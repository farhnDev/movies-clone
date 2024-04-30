// eslint-disable-next-line react/prop-types
export default function HeaderItems({ name, Icon }) {
    return (
        <div className={'text-white flex gap-3 md:justify-center items-center text-[15px]'
            + ' font-semibold cursor-pointer hover:underline underline-offset-8 mb-2'}>
            <Icon />
            <h2 className="">
                {name}
            </h2>
        </div>
    )
}