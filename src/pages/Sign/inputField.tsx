type InputFieldProps = {
    label: string;
    type: string;
    value: string;
    setValue: (value: any) => void;
    placeholder?: string
}

export function InputField(Props: InputFieldProps){
     return(
        // <div className="relative mb-4 h-20">
            <fieldset className="h-22 border border-[#00A9FF] rounded p-2 flex row-reverse mb-4">
                <legend className="relative font-semibold text-xl text-white px-4" >{Props.label}</legend>
                <input
                    type={Props.type}
                    value={Props.value}
                    onChange={(e) => Props.setValue(e.target.value)}
                    className="w-full bg-transparent text-[#7A7A80] outline-none focus:ring-0 focus:outline-none"
                    placeholder={Props.placeholder}
                />
            </fieldset>
        // </div>
     )
}