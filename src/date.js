const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]

export const getDay = () => {
    
    const d = new Date() 

    return days[d.getDay()]

}