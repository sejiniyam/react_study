import { useState, useCallback } from "react";

// 커스텀 hook 만들긔
function useInputs(initialForm) {
    const [form, setForm] = useState(initialForm);
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        setForm(form => ({ ...form, [name] : value }));
    }, []);

    const reset = useCallback(() => setForm(initialForm), [initialForm]);
    return [form, onChange, reset];
}

export default useInputs;