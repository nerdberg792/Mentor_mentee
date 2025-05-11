import express from "express";
import authMiddleware from "./middleware";
import { prismaClient } from "../../packages/db/src";

const app = express();
app.use(express.json());

// Mentor creates a meeting with a mentee
app.post("/api/v1/mentor/createMeeting", (req, res) => {
    void (async () => {
        try {
            const { menteeId, startTime, endTime } = req.body;
            const meeting = await prismaClient.meeting.create({
                data: {
                    mentorId: (req as any).userId,
                    menteeId,   
                    startTime: new Date(startTime),
                    endTime: new Date(endTime),
                },
            });
            res.json(meeting);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    })();
});

// Mentor creates an announcement for mentees
app.post("/api/v1/mentor/createAnnouncement", (req, res) => {
    void (async () => {
        try {
            const { menteeIds } = req.body; // array of mentee IDs
            const announcement = await prismaClient.announcement.create({
                data: {
                    mentorId: (req as any).userId,
                    mentees: {
                        connect: menteeIds.map((id: string) => ({ id })),
                    },
                },
                include: { mentees: true },
            });
            res.json(announcement);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    })();
});

// Mentor gets their meetings
app.get("/api/v1/mentor/getMeetings", authMiddleware, (req, res) => {
    void (async () => {
        try {
            const meetings = await prismaClient.meeting.findMany({
                where: { mentorId: (req as any).userId },
            });
            res.json(meetings);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    })();
});

// Mentee gets their announcements
app.get("/api/v1/mentee/getAnnouncements", authMiddleware, (req, res) => {
    void (async () => {
        try {
            const announcements = await prismaClient.announcement.findMany({
                where: {
                    mentees: {
                        some: { id: (req as any).userId },
                    },
                },
            });
            res.json(announcements);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    })();
});

// Mentee gets their meetings
app.get("/api/v1/mentee/getMeetings", authMiddleware, (req, res) => {
    void (async () => {
        try {
            const meetings = await prismaClient.meeting.findMany({
                where: { menteeId: (req as any).userId },
            });
            res.json(meetings);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    })();
});

// Mentor gets a specific announcement by ID
app.get(`/api/v1/mentor/getAnnouncementsByID/:id`, authMiddleware, (req, res) => {
    void (async () => {
        try {
            const announcement = await prismaClient.announcement.findUnique({
                where: { id: req.params.id },
                include: { mentees: true },
            });
            if (!announcement || announcement.mentorId !== (req as any).userId) {
                return res.status(404).json({ error: "Announcement not found or unauthorized" });
            }
            res.json(announcement);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    })();
});

// Mentor gets a specific meeting by ID
app.get(`/api/v1/mentor/getMeetingsByID/:id`, authMiddleware, (req, res) => {
    void (async () => {
        try {
            const meeting = await prismaClient.meeting.findUnique({
                where: { id: req.params.id },
            });
            if (!meeting || meeting.mentorId !== (req as any).userId) {
                return res.status(404).json({ error: "Meeting not found or unauthorized" });
            }
            res.json(meeting);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    })();
});

// Mentor gets a mentee's performance by mentee ID
app.get(`/api/v1/mentor/getPerformanceByID/:id`, authMiddleware, (req, res) => {
    void (async () => {
        try {
            // Check if the mentee belongs to the mentor
            const mentee = await prismaClient.mentee.findUnique({
                where: { id: req.params.id },
                include: { performance: true },
            });
            if (!mentee || mentee.mentorId !== (req as any).userId) {
                return res.status(404).json({ error: "Mentee not found or unauthorized" });
            }
            res.json(mentee.performance);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    })();
});

app.listen(3000);