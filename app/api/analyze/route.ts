import { NextResponse } from 'next/server';

import { analyzeDay } from '@/services/gemini';
import type { DayActivities } from '@/types/activity';

type AnalyzeRequestBody = {
    activities?: DayActivities;
    day?: DayActivities;
    [key: string]: unknown;
};

function isActivityLike(value: unknown): value is { category: string; text?: string; subcategory?: string } {
    return typeof value === 'object' && value !== null && 'category' in value;
}

function extractActivities(body: AnalyzeRequestBody | Record<string, unknown>): DayActivities | null {
    if (typeof body !== 'object' || body === null) return null;

    if ('activities' in body && typeof body.activities === 'object' && body.activities) {
        return body.activities as DayActivities;
    }

    if ('day' in body && typeof body.day === 'object' && body.day) {
        return body.day as DayActivities;
    }

    const keys = Object.keys(body as Record<string, unknown>);
    if (keys.length === 0) return null;

    const firstValue = (body as Record<string, unknown>)[keys[0]];
    if (typeof firstValue === 'object' && firstValue !== null) {
        const day = firstValue as Record<string, unknown>;
        const dayKeys = Object.keys(day);
        if (dayKeys.length > 0) {
            const sample = day[dayKeys[0]];
            if (isActivityLike(sample)) {
                return day as DayActivities;
            }
        }
    }

    return null;
}

export async function POST(request: Request) {

    return NextResponse.json({ status: 'error', response: 'Internal Server Error' }, { status: 500 });

    /* try {
        const apiKey = process.env.API_KEY;
        const authHeader = request.headers.get('authorization') || '';
        const token = authHeader.startsWith('Bearer ') ? authHeader.slice('Bearer '.length).trim() : '';

        if (!apiKey || !token || token !== apiKey) {
            return NextResponse.json({ status: 'error', response: 'Unauthorized' }, { status: 401 });
        }

        const body = (await request.json()) as AnalyzeRequestBody;
        const activities = extractActivities(body);

        if (!activities) {
            return NextResponse.json(
                { status: 'error', response: 'Invalid payload. Provide DayActivities or a date wrapper.' },
                { status: 400 }
            );
        }

        const analysis = await analyzeDay(activities);
        return NextResponse.json({ status: 'ok', response: analysis });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json({ status: 'error', response: message }, { status: 500 });
    } */
}
