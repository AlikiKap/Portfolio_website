import { Card, CardContent, Typography, Link } from '@mui/material'
import React from 'react';

function ProjectCard({ project }: any) {

    return (
        <Card style={{ background: '#212121', color: 'white', width: '60%', padding: '16px', marginBottom: '16px' }}>
            <CardContent style={{textAlign:"center"}}>
                <Typography style={{ fontSize: "22px", fontWeight: "800" }}>{project.name}</Typography>
                <img src={project.image} alt={project.name} width="80%"/>
                <Typography>{project.description}</Typography>
                <Typography>
                    Techologies used:
                </Typography>
                <Typography>
                    <mark
                        style={{ fontWeight: '600', background: "#D45BFF", borderRadius: '32px', paddingInline: '8px' }}
                    >
                        {project.tools}
                    </mark>
                </Typography>
                <Typography>
                    Github:
                </Typography>
                <Link href={`${project.link}`} underline="always" style={{ color: '#BEFF34' }}>{project.link}</Link>
            </CardContent>
        </Card>
    )
}

export default ProjectCard