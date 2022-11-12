export function getValueURL(nameID,defaultvalue)
{
    let url = window.location;
    let value;
    try
    {
        value = new URLSearchParams(url.search).get(nameID);
        if (value == null)
        {
            value = defaultvalue;
        }
    }
    catch (e)
    {
        console.log(e);
        value = defaultvalue;
    }
    return value;
}