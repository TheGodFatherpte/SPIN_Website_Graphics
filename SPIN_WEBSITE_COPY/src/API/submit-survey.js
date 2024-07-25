import { promises as fs } from 'fs';
import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import path from 'path';

const SPREADSHEET_ID = '1Gaa2XQpO8kNR9cqmCKh2Yehm8zYmDW9S36StBy3umVE';
const CREDS_PATH = path.join(process.cwd(), 'config/credentials.json');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Leer credenciales
            const creds = JSON.parse(await fs.readFile(CREDS_PATH, 'utf8'));

            // Inicializar autenticación
            const serviceAccountAuth = new JWT({
                email: creds.client_email,
                key: creds.private_key,
                scopes: ['https://www.googleapis.com/auth/spreadsheets'],
            });
            console.log(req.body);
            // Crear instancia del documento
            const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth);

            // Cargar la información del documento
            await doc.loadInfo();

            // Seleccionar la primera hoja del documento
            const sheet = doc.sheetsByIndex[0];

            // Agregar una nueva fila con los datos del formulario
            await sheet.addRow({
                'Agency Name': req.body.name,
                'Email': req.body.email,
                'Phone Number': req.body.phoneNumber,
                "What is your agency's total written premium?": req.body.totalPremium,
                'What percentage of the premium is residential?': req.body.residentialPercentage,
                'How many Citizens Residential policies (HO3, HO6, and HO8) do you currently have in force?': req.body.citizensPolicies,
                'On average, how many HO3 do you write each month?': req.body.averageHO3,
                'On average, how many HO6 do you write each month?': req.body.averageHO6,
                'On average, how many HO8 do you write each month?': req.body.averageHO8,
            });

            res.status(200).json({ message: 'Success' });
        } catch (error) {
            console.error('Error al enviar los datos a Google Sheets:', error);
            res.status(500).json({ message: 'Error al enviar los datos' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
