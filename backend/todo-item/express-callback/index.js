export default function makeCallback(controller) {
    return (req, res) => {
        controller(req).then(response => {
            if (response.headers) {
                res.set(response.headers);
            }
            res.type('json');
            res.status(response.statusCode).send(response.body);
        }).catch((err) => {
            console.log(`controller error: ${JSON.stringify(err)}`);
            res.status(500).send({error: 'unknown error'});
        });
    }
}
