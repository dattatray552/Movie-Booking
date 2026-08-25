const timeFormat=(minute)=>{
    const hours=Math.floor(minute/60);
    const minuteremainder=minute%60;

    return `${hours}h ${minuteremainder}m`

}

export default timeFormat;