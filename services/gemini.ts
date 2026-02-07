import type { DayActivities } from '@/types/activity';

// Load variables from process.env (Expo handles this for .env files)
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'YOUR_GEMINI_API_KEY';
const GEMINI_PROMPT = process.env.GEMINI_PROMPT || '';

/**
 * Formats day activities into a readable string for the AI
 */
function formatActivities(activities: DayActivities): string {
    const sortedTimes = Object.keys(activities).sort();
    if (sortedTimes.length === 0) return "No activities logged for this day.";

    return sortedTimes
        .map(time => {
            const activity = activities[time];
            return `${time}: ${activity.text || activity.subcategory}`;
        })
        .join('\n');
}

/**
 * Analyzes the day activities using Gemini API
 */
export async function analyzeDay(activities: DayActivities): Promise<string> {
    if (!GEMINI_API_KEY || GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY') {
        throw new Error('Analysis can not be called (1).');
    }

    const formattedLog = formatActivities(activities);
    const fullPrompt = `${GEMINI_PROMPT}\n\n${formattedLog}`;

    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${GEMINI_API_KEY}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: fullPrompt,
                                },
                            ],
                        },
                    ],
                }),
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Gemini API Error:', errorData);
            throw new Error(errorData.error?.message || 'Analysis can not be called (2).');
        }

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        return typeof text === 'string' ? text : 'No analysis generated.';
    } catch (error) {
        console.error('Error analyzing day:', error);
        throw error;
    }
}
