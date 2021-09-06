import Select from "react-select";
import {useDispatch} from "react-redux";

const CustomSelect = ({options, action}) => {
    const dispatch = useDispatch();

    options = Object.values(options)


    const handleSelect = (value) => {
        dispatch(action(value))
    }

    return (
        <Select options={options} onChange={(e) => handleSelect(e.value)}></Select>
    )
}

export default CustomSelect