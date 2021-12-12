import cats from "../../cats"

export default function handler(req, res) {
    res.status(200).json(cats)
}
